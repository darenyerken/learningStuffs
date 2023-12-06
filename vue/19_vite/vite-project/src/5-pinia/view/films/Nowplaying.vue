<template>
    <div>
        Now Playing
        <p>-</p>
        <p>-</p>
        <ul>
            <li v-for="item in filmList" :key="item.filmId" @click="goToDetail(item.filmId)">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'  //引进vue-router的函数

const filmList = ref([])
const router = useRouter()  //定义router

onMounted(() => {
    axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=3578181',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701307051883612211740673"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res => {
        filmList.value = res.data.data.films
    }).catch(res => { console.log(res) })
})
const goToDetail = (id) => {
    // 第一种: path传参
    // this.$router.push(`/detail/${id}`)
    // 第二种：路由名称传参
    router.push({
        name: 'detail',
        params: {
            id
        }
    })
    // 第三种：query传参，相应的页面接受参数也从query对象中接受
    // detail?id=6614 
}
</script>
<style scoped></style>