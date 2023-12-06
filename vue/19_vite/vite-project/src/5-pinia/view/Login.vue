<template>
    <div>
        <h1>Login</h1>
        <button @click="login">登录</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

// 点击登录
const login = ()=>{
    localStorage.setItem("token",'dr')
    // 跳转我的页面
    router.push('/center')
}
</script>
<style scoped>

</style>