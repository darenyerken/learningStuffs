<template>
    <div>
        <button @click="goBack">&lt;</button>
        detail
        <div @click="goAnother(6643)">猜你喜欢</div>
    </div>
</template>
<script setup>
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute()
const router = useRouter()

onMounted(() => {
    console.log('接受参数 ', route.params.id, '请求数据+渲染页面')
})
onBeforeRouteUpdate((to, from, next) => {
    console.log('接受参数 ', to.params.id, '请求数据+渲染页面')
    next() //继续跳转到新的路由
})
const goBack = () => {
    router.back() //返回
    // this.$router.go(-1)

    // this.$router.forward() //前进
    // this.$router.go(1)
}
const goAnother = (id)=> {
    router.push(`/detail/${id}`)
}
</script>
<style scoped></style>