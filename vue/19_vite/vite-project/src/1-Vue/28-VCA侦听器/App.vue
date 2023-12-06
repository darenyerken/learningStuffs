<template>
    <div>
        App
        {{ computedName }}
    </div>
</template>
<script setup>
import { ref, watch, watchEffect } from 'vue';

const name = ref('kaka')
const computedName = ref('')
// watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。
// 另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，
// 因此，我们能更加精确地控制回调函数的触发时机。

// watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，
// 自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。

// 默认情况下，用户创建的侦听器回调，都会在 Vue 组件更新之前被调用。
// 这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。
// 如果想在侦听器回调中能访问被 Vue 更新之后的 DOM，你需要指明 flush: 'post' 选项


// 直接传入ref或者reactive对象，自动深层监听
watch(name,()=>{
    console.log('"name" has been changed')
})

// 传入一个getter，可以侦听原始值，但如果是对象不会自动深层侦听
// deep:true 深层监听
// immediate:false 立即执行一次，默认关闭
// watch(()=>name.value,()=>{
//     console.log('"name" has been changed')
// },{deep;true,imeediate:true})

// watchEffect
// 自动追踪回调函数内的依赖
// 自动立即执行
// 类似于conputed但是可以异步执行
// 在使用异步回调时，只有在第一个 await 正常工作前访问到的属性才会被追踪。
watchEffect(()=>{
    computedName.value = name.value.substring(0,1).toLocaleUpperCase()
})

// 在 setup() 或 <script setup> 中用同步语句创建的侦听器，
// 会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。
// 因此，在大多数情况下，你无需关心怎么停止一个侦听器。
// 也可以：
// const unwatch = watchEffect(() => {})

// // ...当该侦听器不再需要时
// unwatch()
</script>
<style scoped>

</style>