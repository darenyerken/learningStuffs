
<template>
  <!--             向子组件传递数据 -->
  <!-- 其中的原理是定义在组件标签上的所有属性包括事件都会透传到子的￥attrs状态上，这个状态默认挂在最外层标签上  -->
  <!--  -->
  <Navbar class="navbar" left="前进" right="后退" v-bind="toChild"></Navbar>
  <Layout class="layout"></Layout>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Layout from './Layout.vue'
  export default {
    data() {
      return {
        toChild:{   //向子组件传递数据 
          now:'现在',
          // before:'之前'
        }
      }
    },
    components: {
      Layout,
      Navbar
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .navbar {
    width: 100%;
    height: 10vh;
    background-color: aqua;
  }
  .layout {
    width: 100%;
    height: 90vh;
    background-color: crimson;
  }
  
</style>
