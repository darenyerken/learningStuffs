const CinemaModule = {
    state(){
        return {
            cinemaList: []
        }
    },
    // 只能写同步代码
    mutations:{
        // 第一个参数固定，第二个参数接受commit传递的参数
        changeCinemaList(state,data) {
            state.cinemaList = data
        }
    },
    // 同步异步都可以
    actions:{
        //          注入的是store对象
        async getCinemaList(store) {
            // 异步取数据
            await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve()
                },1000)
            })
            // 更新状态
            store.commit('changeCinemaList',['aaa1','bbb2','ccc1','ddd2'])
        }
    },
    getters:{
        // 这里是接受state，如果需要接受参数就返回一个接受参数的回调函数
        filtCinemaList(state) {
            return (keyword)=> {
                return state.cinemaList.filter(item=>item.includes(keyword))
            }
        }
    }
}

export default CinemaModule