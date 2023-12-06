<template>
    <div>
        center
    </div>
</template>
<script>
export default {
    // 组件内路由守卫
    // beforeRouterEnter在VCA中没有函数来使用，VCA写法中可以在router配置里面对此页面进行配置
    beforeRouteEnter(to,from, next) {
        // 是否授权
        let isAuthencated = false
        if( !isAuthencated) {
            next({name:'login'})
        } else next()
    }
}
</script>
<style scoped>

</style>