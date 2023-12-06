
<template>
  <div>
    <button>后退</button>
    <span>{{ title }}</span>
    <button>前进</button>
  </div>
</template>

<script>
  import store from './store.js';
  export default {
    data() {
      return {
        title:'首页'
      }
    },
    components: {
      
    },
    mounted() {
      store.subscript((value)=>{
        this.title = value
      })
    }
    // inject:['navTitle']
  }
</script>
 
<style scoped>
div{
  width: 100%;
  height: 10vh;
  background-color: #ddd;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  line-height: 100%;
}
span {
  line-height: 10vh;
}
button {
  font-size: 1rem;
  padding: 1rem;
  cursor: pointer;
}
</style>
