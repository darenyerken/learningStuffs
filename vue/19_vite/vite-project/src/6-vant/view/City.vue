<template>
    <div>
        <van-index-bar>
            <template v-for="(cityList,cityIndex) in cities" :key="cityIndex">
                <van-index-anchor :index="String.fromCharCode(cityIndex + 65)" />
                <van-cell 
                :title="item.name" v-for="item in cityList" :key="item.cityId" 
                @click="clickCity(item)"/>
            </template>
        </van-index-bar>
    </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import {
    IndexBar as vanIndexBar,
    IndexAnchor as vanIndexAnchor,
    Cell as vanCell
} from 'vant'
import useCinemaStore from '../store/cinemaSrore'
import { useRouter } from 'vue-router';

const cities = ref([])
const store = useCinemaStore()
const router = useRouter()

// 获取城市数据
onMounted(async () => {
    let res = await axios({
        url: 'https://m.maizuo.com/gateway?k=8783846',
        headers: {
            'X-Client-Info':
                '{"a":"3000","ch":"1002","v":"5.2.1","e":"17016134701136521360965633","bc":"110100"}',
            'X-Host': 'mall.film-ticket.city.list'
        }
    })
    // 城市分类并保存本地
    for (let i = 97; i <= 122; i++) {
        cities.value[i-97] = res.data.data.cities.filter(item => item.pinyin.charCodeAt(0) === i)
    }
    console.log(cities)
})

// 点击城市
const clickCity = (city)=> {
    // 设置store的状态
    store.setCity(city)
    // 更新城市影院列表
    store.getCinemaList()
    router.back()
}
</script>
<style scoped></style>