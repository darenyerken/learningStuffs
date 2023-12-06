<template>
    <div class="navbar">
        <ul>
            <!-- 方式一：link标签最终会转换成a标签,需要对a标签重置样式 -->
            <!-- active-class 给当前路由下的a标签添加样式 -->
            <!-- <li>
                <router-link to="/films" active-class="navbarActive">电影</router-link>
            </li>
            <li>
                <router-link to="/cinema" active-class="navbarActive">影院</router-link>
            </li>
            <li>
                <router-link to="/center" active-class="navbarActive">我的</router-link>
            </li> -->

            <!-- 方式二：利用插槽自定义,link标签转换的标签自定义  -->
            <!-- 1.添加custom属性来接受插槽标签为转换标签 -->
            <!-- 2.接受两个属性： isActive：是否在当前组件路由 -->
            <!-- navigate:跳转 -->
            <router-link custom to="/films" v-slot="{isActive, navigate}">
                <li :class="isActive? 'navbarActive':''" @click="navigate">电影</li>
            </router-link>
            <router-link custom to="/cinema" v-slot="{isActive, navigate}">
                <li :class="isActive? 'navbarActive':''" @click="navigate">影院</li>
            </router-link>
            <router-link custom to="/center" v-slot="{isActive, navigate}">
                <li :class="isActive? 'navbarActive':''" @click="navigate">我的</li>
            </router-link>
        </ul>
    </div>
</template>
<script setup>

</script>
<style scoped>
.navbar {
    background-color: #fff;
    width: 100%;
    height: 9vh;
    line-height: 9vh;
    position: fixed;
    z-index: 999;
    bottom: 0;
}
ul {
    display: flex;
}
li {
    flex: 1;
    text-align: center;
    /* border: 1px solid #ddd */
}
.navbarActive {
    color: crimson;
}
</style>