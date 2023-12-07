<template>
    <div id="app">
        <h1 ref="h1">Ts Learning</h1>
        <Child ref="child" />
        <button @click="handleClick">button</button>
    </div>
</template>
<script setup lang='ts'>
import Child from './components/Child.vue';
import { onMounted, provide, ref } from 'vue';

// provide -ts
const aaa = ref('App')
provide('fromApp', {
    'a': "aaa",
    'b': 'bbb',
    'from': aaa.value
})

// ref -ts
// 组件的ref
// 需要子组件expose
// InstanceType: 获取子组件类型
const child = ref<InstanceType<typeof Child>>()
// dom元素的ref
const h1 = ref<HTMLElement>()
onMounted(() => {
    console.log(child.value?.bbb);
    console.log(h1.value);

})

// 事件
const handleClick = (evt: Event)=> {
    console.log('Some body clicked a button: ',evt.target);
    
}

</script>
<style scoped>
#app {
    margin-top: 30vh;
}
</style>