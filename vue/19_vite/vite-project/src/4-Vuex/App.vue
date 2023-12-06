<template>
    <div>
        App
        <!-- 路由插槽 -->
        <!-- 浏览器导航栏部分大小写 -->
        <router-view></router-view>
        <Navbar v-show="$store.state.TabbarModule.isTabbarShow"/>
    </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
    components:{
        Navbar
    }
}
</script>
<style scoped></style>

<!-- 状态模块化管理时： -->
<!-- 1.state保留在模块中，每个模块中getters，mutation，action都会被注册进全局store中 -->
<!-- 2.想进一步把getters等封装进模块中只需要在模块中开启nameSpace：true-->
<!-- 3.模块中的actions，getters等中的方法收到的参数都是当前模块的state或者store，可以通过rootstate访问其他状态 -->


<!-- VCA风格中用store需要导入useStore -->