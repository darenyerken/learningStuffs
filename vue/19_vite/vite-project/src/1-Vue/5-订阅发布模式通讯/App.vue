
<template>
  <div>
    <Navbar class="navbar" />
    <Tabbar class="tabbar"/>
  </div>
</template>

<script>
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
