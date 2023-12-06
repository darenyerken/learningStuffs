
<template>
  <div>
    <Navbar class="navbar" />
    <!-- is状态传递每个组件的名字 -->
    <!-- 这种模式相当于用v-if判断，每次点击都会销毁以前的创建新的组件 -->
    <!-- <component class="component" :is="watch"/> -->

    <!-- 这种写法是相当于v-show，有缓存方便记录  -->
    <!-- 不写include默认包含所有 -->
    <!-- include写每个组件的名字，leepalive只对写入名字的组件有效,组件名字在每个组件中定义 -->
    <!-- exclude 是排除，与include相反 -->
    <KeepAlive include="Home">
      <component class="component" :is="watch"/>
    </KeepAlive>
    <Tabbar class="tabbar"/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Tabbar from './Tabbar.vue';
import Home from './mainPage/Home.vue'
import Films from './mainPage/Films.vue'
import Mine from './mainPage/mine.vue'
import store from './store';

  export default {
    data() {
      return {
        // navTitle:{
        //   content:'首页'
        // }     
        watch:'Home'     
      }
    },
    components: {
      Navbar,
      Tabbar,
      Home,
      Films,
      Mine
    },
    mounted() {
      const obj = {
        '首页':'Home',
        '电影':'Films',
        '我的':'Mine'
      }
      store.subscript((value)=>{
        this.watch = obj[value]
      })
    }
    // provide(){
    //   return {
    //     navTitle:this.navTitle
    //   }
    // }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.navbar {
  position: absolute;
  top: 0;
}
.tabbar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.component {
  position: absolute;
  width: 100%;
  height: 80vh;
  top: 10vh;
  background-color: crimson;
  font-size: 2rem;
  /* 临时模拟页面配置⬇ */
  line-height: 80vh;
  text-align: center;
}
</style>
