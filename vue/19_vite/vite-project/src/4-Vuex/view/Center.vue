<template>
    <div>
        center
    </div>
</template>
<script>
export default {
    // 组件内路由守卫
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