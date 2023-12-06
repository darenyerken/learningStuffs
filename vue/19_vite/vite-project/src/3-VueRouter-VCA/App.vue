<template>
    <div>
        App
        <!-- 路由插槽 -->
        <!-- 浏览器导航栏部分大小写 -->
        <router-view></router-view>
        <Navbar />
    </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
</script>
<style scoped>

</style>