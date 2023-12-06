import {createStore} from 'vuex'
import CinemaModule from './module/CinemaModule.js'
import TabbarModule from './module/TabbarModule.js'
const store = createStore({
    modules:{
        CinemaModule,
        TabbarModule
    }
})

export default store