<template>
    <div id="app">
        <h1 ref="h1">Ts Learning</h1>
        <Child ref="child" @event="fromChild" title="xxx"/>
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
    console.log('test 组件ref: ',child.value?.bbb);
    console.log('test dom元素ref：',h1.value);
})


// emit
// emit是函数，需要在子组件那里触发
const fromChild = (value: string) => {
    console.log('emit: ',value);
    
}

// 事件
const handleClick = (evt: Event) => {
    console.log('Some body clicked a button: ', evt.target);
}
</script>

<style scoped>
#app {
    margin-top: 30vh;
}
</style>