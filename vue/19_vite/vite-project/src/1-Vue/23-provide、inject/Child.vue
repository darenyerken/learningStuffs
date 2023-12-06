<template>
    <div>
        Child
        <button @click="handleClick">button</button>
        {{ text }}
    </div>
</template>
<script>
import {inject} from 'vue'
export default {
    setup(){
        const text = inject('text')
        const handleClick = ()=> {
            text.value = 'bbbaa'
        }

        return {
            handleClick,
            text
        }
    }

}
</script>