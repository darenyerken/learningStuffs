<template>
    <div>
        <!-- <ul>
            <li v-for="item in filmList" :key="item.filmId" @click="goToDetail(item.filmId)">
                {{ item.name }}
            </li>
        </ul> -->
        <van-list 
            v-model:loading="loading" 
            :finished="finished" 
            finished-text="没有更多了" 
            @load="onLoad"
            :offset="10"
            :immediate-check="false">
            <van-cell 
                v-for="item in filmList" 
                :key="item.filmId" 
                :value="item.name" 
                @click="goToDetail(item.filmId)">
                <template #title>
                    <img :src="item.poster" style="width: 100px; float: left;">
                </template>
            </van-cell>
        </van-list>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'  //引进vue-router的函数
import { List as vanList, Cell as vanCell } from 'vant'

const filmList = ref([])
const router = useRouter()  //定义router
// 初始化van-list 列表
const loading = ref(false)
const finished = ref(false)
const curPage = ref(0)
const totalFilms = ref(0)

const onLoad = ()=> {
    // 当后台数据库的电影加载完成停止加载
    if( filmList.value.length >= totalFilms.value) {
        finished.value = true
        loading.value = false
        return 
    }
    // // 开启加载
    // loading.value = true
    axios({
        url: `https://m.maizuo.com/gateway?cityId=510100&pageNum=${curPage.value}&pageSize=10&type=1&k=3578181`,
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701307051883612211740673"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res => {
        // 新获取的电影追加到数据后
        filmList.value = [...filmList.value,...res.data.data.films]
        curPage.value++
        loading.value = false
    }).catch(res => { 
        loading.value = false
        console.log(res) 
    })
}

onMounted(() => {
    axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=3578181',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701307051883612211740673"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res => {
        filmList.value = res.data.data.films
        curPage.value++
        // 获取影片总数
        totalFilms.value = res.data.data.total
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
<style scoped>
:deep(.van-cell__value) {
    text-align: left;
}
:deep(.van-cell__title) {
    flex-grow: 0;
    margin-right: 10px;
}
</style>