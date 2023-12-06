
<template>
  <div>
    <!-- 子传父： -->
    <!-- 1.父组件自定义事件来监听子组件的传递 -->
    <!-- 2.子组件通过调用$emit向父组件传递 -->

    <!-- 这里注意：event事件的evt参数就是携带子组件传递的数据 -->
    app
    <Child @event="handleEvent"></Child>
  </div>
</template>

<script>
import Child from './Child.vue';

  export default {
    data() {
      return {
        
        }
    },
    components: {
      Child
    },
    methods:{
      // 传递的数据可以是多个 
      handleEvent(val1) {
        console.log(val1.name,'---',val1.age)
      }
    }
  }
</script>

<style>

</style>
