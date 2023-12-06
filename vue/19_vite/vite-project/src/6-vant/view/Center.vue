<template>
    <div>
        <h1>MyInformation</h1>
    </div>
</template>
<script>
export default {
    // 组件内路由守卫
    // beforeRouterEnter在VCA中没有函数来使用，VCA写法中可以在router配置里面对此页面进行配置
    beforeRouteEnter(to,from, next) {
        // 是否授权
        let isAuthencated = localStorage.getItem("token")
        if( !isAuthencated) {
            next({name:'login'})
        } else next()
    }
}
</script>
<script setup>
// 局部导入组件库
// import {Button as vanButton} from 'vant'
// import 'vant/lib/index.css'

</script>
<style scoped>

</style>