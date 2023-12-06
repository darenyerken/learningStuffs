<template>
    <div>
        cinema
    </div>
</template>
<script setup>
import { onBeforeRouteLeave } from 'vue-router';
onBeforeRouteLeave((to,from,next) => {
    if (to.path !== '/login') {
        const isLeaving = window.confirm('是否离开当前页面')
        if (!isLeaving) next({ path: from.path })  // 函数返回false会停止跳转
        else next()
    } else next()
})
</script>
<style scoped></style>