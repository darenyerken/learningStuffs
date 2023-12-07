<template>
    <div>
        <h2>Child</h2>
        {{ aaa?.from }}
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
console.log(aaa);

// 暴露给父亲
const bbb = ref('im from child')
defineExpose({
    bbb
})

</script>
<style scoped>

</style>