<template>
    <div id="child">
        <h2 @click="toFatherByEmit">Child</h2>
        test-inject:{{ aaa?.from }}
        <p>test-props:{{ title}}</p>
    </div>
</template>
<script setup lang='ts'>
import { inject, ref } from 'vue';


// inject -ts
type fromfather = {
    aaa:string,
    bbb:string,
    from:string
}
const aaa = inject<fromfather>('fromApp')
console.log('test-inject: ',aaa);

// 暴露到组件外
const bbb = ref('im from child')
defineExpose({
    bbb
})

// props
// const props = defineProps({
//     title:String
// })
const props = defineProps<{
    title:string
}>()
props
// emit
const emit = defineEmits<{
    (e:string,val:string):void
}>()
const toFatherByEmit = () => {
    emit('event','from-child-emit')
}


</script>
<style scoped>
#child {
    background-color: #ddd;
}
</style>