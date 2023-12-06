<template>
    <div>
        cinema
    </div>
</template>
<script>

export default {
    // 在离开该网页之前确认是否离开
    beforeRouteLeave(to,from,next) {
        if( to.path !== '/login') {
            const isLeaving = window.confirm('是否离开当前页面')
            if( !isLeaving) next({path:from.path})  // 函数返回false会停止跳转
            else next()
        } else next()
    }
}

</script>
<style scoped>

</style>