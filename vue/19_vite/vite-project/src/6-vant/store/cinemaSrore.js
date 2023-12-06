import { defineStore } from 'pinia'
import axios from 'axios'

// 第一个参数是唯一的storeID
const useCinemaStore = defineStore('cinema', {
    // option Store
    state: () => {
        return {
            cinemaList: [],
            city:{name:'北京',cityId:110100}
        }
    },
    actions: {
        async getCinemaList() {
            // 异步取数据
            let res = await axios({
                url: `https://m.maizuo.com/gateway?cityId=${this.city.cityId}&ticketFlag=1&k=7957509`,
                headers: {
                    'X-Client-Info':
                        '{"a":"3000","ch":"1002","v":"5.2.1","e":"17016134701136521360965633","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            })
            // 更新状态
            this.cinemaList = res.data.data.cinemas
        },
        setCity(value) {
            this.city = value
        }
    },
    // getters相当于一个store的属性，一般不传参，需要传参就返回一个接受参数的回调函数
    getters: {
        filtedCinemaList(state) {
            return (keyword) => state.cinemaList.filter(item => item.eTicketFlag === keyword)
        }
    }
})

export default useCinemaStore