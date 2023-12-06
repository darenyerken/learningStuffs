
<template>
  <div>
    <ul>
      <li @click="handleClick(item)" v-for="item in list" :key="item">{{ item }}</li>
    </ul>    
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        list:['首页','电影','我的']  
      }
    },
    // inject是一个数组
    inject:['navTitle'],
    methods:{
      handleClick( item){
        this.navTitle.content = item
      }
    }
  }
    </script>

<style scoped>
  ul {
    font-size: 1.5rem;
    width: 100%;
    height: 10vh;
    display: flex;
  }
  li {
    flex:1; 
    text-align: center;
    line-height: 10vh;
    border: 1px solid #ddd;
    cursor: pointer;
  }
</style>
