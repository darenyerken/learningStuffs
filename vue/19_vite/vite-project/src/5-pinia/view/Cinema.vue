<template>
    <div>
        <h1><label for="a">Cinemas</label></h1>
        <select v-model="keyword" id="a">
            <option :value="0">App订票</option>
            <option :value="1">前台订票</option>
        </select>
        <ul>                   <!--调用vuexgetters方法并传递参数-->
            <li v-for="cinema in store.filtedCinemaList(keyword)" :key="cinema.id">
                {{ cinema.name }}
            </li>
        </ul>
    </div>
</template>
<script setup>
// import { onBeforeRouteLeave } from 'vue-router';
import useCinemaStore from '../store/cinemaSrore'
import { onBeforeMount, ref} from 'vue'

const store = useCinemaStore()
const keyword = ref(0)

// 判断store中影院信息是否为空
onBeforeMount(()=> {
    // 判断状态中的电影院列表是否为空
    if( store.cinemaList.length === 0) {
        // 获取电影数据
        store.getCinemaList()
    }
})

// 离开页面询问
// onBeforeRouteLeave((to,from,next) => {
//     if (to.path !== '/login') {
//         const isLeaving = window.confirm('是否离开当前页面')
//         if (!isLeaving) next({ path: from.path })  // 函数返回false会停止跳转
//         else next()
//     } else next()
// })
</script>
<style scoped></style>