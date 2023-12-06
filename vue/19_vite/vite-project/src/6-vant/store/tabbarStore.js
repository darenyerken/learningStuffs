import {defineStore} from 'pinia'


// 第一个参数是唯一的storeID
const useTabbarStore = defineStore('tabbar',{
    // option Store
    state: ()=> {
        return  {
            isTabbarShow: true
        }
    },
    actions: {
        // 只能叫change
        change(tabbarState) {
            this.isTabbarShow = tabbarState
        }
    }
})

export default useTabbarStore