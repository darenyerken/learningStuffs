//              配置路由 

import {createRouter, createWebHashHistory} from 'vue-router'
// 一级路由
// import Cinema from '../view/Cinema.vue'  //这两个页面实行懒加载
import Films from '../view/Films.vue'
// import Center from '../view/Center.vue'
import Detail from '../view/Detail.vue'
import Login from '../view/Login.vue'
import NotFound from '../view/NotFound.vue'
import City from '../view/City.vue'
// Films嵌套路由
import Nowplaying from '../view/films/Nowplaying.vue'
import Comingsoon from '../view/films/Comingsoon.vue'
const routes = [
    {
        path:"/films",
        name:'filmsPage',
        component:Films,
        children:[      //路由嵌套
            {
                path:'/films/nowplaying',
                component:Nowplaying
            },
            {
                path:'/films/comingsoon',
                component:Comingsoon
            },
            {
                path:'/films',
                redirect:'/films/nowplaying'     // 设置好重定向
            }
        ]
    },
    {
        // 登录页面
        path:'/login',
        name:'login',
        component:Login
    },
    {
        // 电影详情
        path:'/detail/:id',
        name:'detail',
        component:Detail
    },
    {
        // 影院
        path:"/cinema",
        alias:'/cinemas',  // 多添加一条路由地址命到该组件
        component:()=>import('../view/Cinema.vue')  // 懒加载组件
    },
    {
        // 我的中心
        path:"/center",
        component:()=>import('../view/Center.vue'),
        meta:{
            requireAuthur:true  // 可以在路由守卫时候读取并拦截该路由
        }
    },
    {
        // 首页
        path:'/',
        redirect:'/films'  // 方法一：重定向到该路由地址,推荐
        // redirect:{
        //     name:'filmsPage'  // 方法二：通过命名重定向到该路由
        // }                     // 会使嵌套路由重定向时效不推荐
    },
    {
        // 404Not found
        path:'/:MatchPath(.*)*',  // 用户输入乱码情况下显示
        component:NotFound
    },
    {
        // 影院页面 -> 城市选择
        path:'/city',
        component:City
    }
]

const router = createRouter({
    // 定义路由方式
    history: createWebHashHistory(),
    // 另一种模式是history模式,没有井号但是需要后端接口支持 

    //引入所有路由
    routes
})

// // 前置钩子
// // 全局路由拦截 - 指定页面需要授权
// router.beforeEach((to, from, next)=>{
//     let isAuthenticated = false
//     if(to.name !== 'login' && !isAuthenticated && to.path === '/center'){
//         next({name:'login'})
//     } else next()
// })

// // 后置钩子
// // 一般用作用户行为分析
// // router.afterEach(()=>)

export default router