<template>
    <div>
        name:{{ name }}
        <br>
        age:{{ age }}
        <br>
        <button @click="changeInfo">修改信息</button>
        <div id="box" v-mydir="color"></div>
        <hr>
        <Child :name="name" :age="age"/>
    </div>
</template>
<script setup>  
// 无需return，模板直接接受数据、函数、方法、指令等
// 可以与普通script标签一起用
// <script setup> 中可以使用顶层 await。结果代码会被编译成 async setup()
// 没有onRouterEnter函数 

// 模块导入无需注册
import Child from './Child.vue'
import {ref, onMounted, useAttrs, useSlots} from 'vue'

// 基本数据类型用ref响应化，引用类型用reactive响应化
const name = ref('kerwin')
const age = ref(100)
// 盒子背景颜色
const color = ref('#5aaf28')

// 定义methods
const changeInfo = ()=>{
    name.value = 'kaka'
    age.value = 22
}

// 自定义指令
const vMydir = {
    mounted:(el)=>{
        // 将盒子颜色初始化为红色
        el.style.backgroundColor = 'red'
    },
    updated:(el,bind)=>{
        console.log(el, ' ', bind)
        // 让盒子颜色跟着color的改变而改变
        el.style.backgroundColor = bind.value
    }
}

// 定义slots和attrs
const slots = useSlots()
const attrs = useAttrs()

// 这个宏可以用来直接在 <script setup> 中声明组件选项，而不必使用单独的 <script> 块
defineOptions({
  inheritAttrs: false,
  customOptions: {
    /* ... */
  }
})
</script>
<style scoped>
#box {
    width: 50px;
    height: 50px;
    background-color: #5aaf28;
}
</style>