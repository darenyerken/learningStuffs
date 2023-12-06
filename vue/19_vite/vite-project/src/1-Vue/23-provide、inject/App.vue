<template>
    <div>
        App <button @click="handleClick">button</button>
        <Child />
    </div>
</template>

<script>
// 引入
import { provide, ref } from 'vue';
import Child from './Child.vue';

export default {
    components: { Child },
    setup() {
        const text = ref('aaabbb')
        // 函数式的使用
        provide('text',text)
        const handleClick = ()=> {
            console.log(text.value)
        }

        return {
            handleClick
        }
    }
}
</script>