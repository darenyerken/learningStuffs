
<template>
  <div>
    child
    <button @click="toFather">向父组件传递参数</button>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        toFatherProps:{
          name:'kerwin',
          age:100
        }
      }
    },
    components: {
      
    },
    methods:{
      toFather(){
        // 第一个参数写父组件定义的事件名，也就是通讯事件名
        this.$emit('event',this.toFatherProps)
        console.log('childBUtton works')
      }
    }
  }
</script>

<style>

</style>
