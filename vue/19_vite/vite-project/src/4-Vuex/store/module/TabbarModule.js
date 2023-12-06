const TabbarModule = {
    state(){
        return {
            isTabbarShow:true,
        }
    },
    // 只能写同步代码
    mutations:{
        // 第一个参数固定，第二个参数接受commit传递的参数
        tabbarShow(state,someArg) {
            state.isTabbarShow = someArg
        }
    }
}

export default TabbarModule