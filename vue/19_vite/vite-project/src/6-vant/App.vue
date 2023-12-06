<template>
    <div>
        <!-- 路由插槽 -->
        <!-- 浏览器导航栏部分大小写 -->
        <router-view></router-view>
        <Navbar v-show="store.isTabbarShow"/>
    </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import useTabbarStore from './store/tabbarStore.js'
const store = useTabbarStore()
</script>
<style scoped>
</style>