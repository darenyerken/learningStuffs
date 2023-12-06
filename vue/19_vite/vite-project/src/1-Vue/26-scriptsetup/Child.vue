<template>
    <div>
        Child
        {{ name }}
        {{ age }}
    </div>
</template>
<script setup>
// import { defineProps, defineEmits } from 'vue';

// 定义props, setup下不需要引入defineprops
// const props = defineProps(['name','age'])
const props = defineProps({
    name:String,
    age:{
        type:Number,
        required:true
    }
})

// 定义emit, setup下不需要引入defineEmits
const emit = defineEmits()

</script>
<style scoped>

</style>