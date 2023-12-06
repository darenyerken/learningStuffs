
<template>
  <div>
    <!-- 标签身上贴ref会在$refs属性列表中添加该标签节点的proxy代理，进而可以控制该节点的状态 -->
    <!-- 一般不推荐使用，容易造成紊乱  -->
    <!-- 相应的 $parent可以拿到父节点的proxy代理控制父节点，$root是根节点 -->
    <Child label="用户名" type="text" ref="username"/>
    <Child label="密码" type="password" ref="password"/>
    <Child label="年龄" type="number" ref="age"/>
    <button @click="handleRegis">注册</button>
    <button @click="handleReset">重置</button>
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
      handleRegis(){
        console.log(this.$refs.username.value)
        console.log(this.$refs.password.value)
        console.log(this.$refs.age.value)
        console.log(this.$refs)
      },
      handleReset() {
        this.$refs.username.value = ''
        this.$refs.password.value = ''
        this.$refs.age.value = 0
      }
    }
  }
</script>

<style>

</style>
