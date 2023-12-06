<template>
    <div>
        App
        <button @click="handleClick">button</button>
        <Child ref="child" />
    </div>
</template>

<script>
import { ref } from 'vue';
import Child from './Child.vue';
export default {
    components: { Child },
    setup() {
        const text = ref('aaabbb')
        const child = ref(null)
        const handleClick = ()=> {
            console.log(child.value.text)
        }
        return {
            text,
            child,
            handleClick
        }
    }
}
</script>