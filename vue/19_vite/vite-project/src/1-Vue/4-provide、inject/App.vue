
<template>
  <div>
    <Navbar class="navbar" />
    <Tabbar class="tabbar"/>
  </div>
</template>

<script>
// provide由根节点导出
// inject由子组件引进
// 他们之间的传递并不是响应式的，像是函数传参，所以可以传递一个对象，
//    通过改变对象属性的方式公用一个对象属性的方式相互影响
import Navbar from './Navbar.vue';
import Tabbar from './Tabbar.vue';

  export default {
    data() {
      return {
        navTitle:{
          content:'首页'
        }          
      }
    },
    components: {
      Navbar,
      Tabbar
    },
    // provide是一个函数，传递的状态放进return
    provide(){
      return {
        navTitle:this.navTitle
      }
    }
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
  position: fixed;
  top: 0;
}
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
