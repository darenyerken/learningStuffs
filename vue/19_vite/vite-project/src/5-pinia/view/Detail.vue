<template>
    <div>
        <button @click="goBack">&lt;</button>
        <h1>Details</h1>
        <div @click="goAnother(6643)">猜你喜欢</div>
    </div>
</template>
<script setup>
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { onBeforeMount, onBeforeUnmount, onMounted } from 'vue';
import useTabbarStore from '../store/tabbarStore';

const route = useRoute()
const router = useRouter()
const store = useTabbarStore()

// 隐藏tabbar
onBeforeMount(()=> {
    // 1.直接改变状态,不推荐
    // store.isTabbarShow = false
    // 2.批量直接操作状态
    // store.$patch({
    //     isTabbarShow:false
    // })
    // 3.提交action，推荐
    store.change(false)
})

// 显示tabbar
onBeforeUnmount(()=> {
    store.change(true)
})

// 初次加载
onMounted(() => {
    console.log('接受参数 ', route.params.id, '请求数据+渲染页面')
})

// 跳转新页面数据更新
onBeforeRouteUpdate((to, from, next) => {
    console.log('接受参数 ', to.params.id, '请求数据+渲染页面')
    next() //继续跳转到新的路由
})

// 返回上一级
const goBack = () => {
    router.back() //返回
    // this.$router.go(-1)

    // this.$router.forward() //前进
    // this.$router.go(1)
}

// 跳转猜你喜欢点击事件
const goAnother = (id)=> {
    router.push(`/detail/${id}`)
}
</script>
<style scoped></style>