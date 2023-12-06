<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <van-tabs  id="tab" animated color="crimson">
            <van-tab>
                <template #title>
                    <router-link to="/films/nowplaying" custom v-slot="{ navigate }" >
                        <span @click="navigate">正在热映</span>
                    </router-link>
                </template>
            </van-tab>
            <van-tab>
                <template #title>
                    <router-link to="/films/comingsoon" custom v-slot="{ navigate }" #title>
                        <span @click="navigate" >敬请期待</span>
                    </router-link>
                </template>
            </van-tab>
        </van-tabs>
        <router-view></router-view>
        <!-- <router-link to="/films/nowplaying" custom v-slot="{ isActive, navigate }">
            <button @click="navigate" :class="isActive ? 'active' : ''">正在热映</button>
        </router-link>
        <router-link to="/films/comingsoon" custom v-slot="{ isActive, navigate }">
            <button @click="navigate" :class="isActive ? 'active' : ''">敬请期待</button>
        </router-link>
        <router-view></router-view> -->
    </div>
</template>
<script setup>
import {
    Swipe as vanSwipe,
    SwipeItem as vanSwipeItem,
    Tab as vanTab,
    Tabs as vanTabs
} from 'vant'
</script>
<style scoped>
/* .active {
    color: red;
} */

/* 轮播条样式 */
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: crimson;
}
#tab {
    position: sticky;
    top: 0;
    z-index: 100;
}
</style>