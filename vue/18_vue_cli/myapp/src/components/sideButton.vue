<template>
    <button @click="handleClick">组件按钮</button>
</template>

<script>
    export default {
        data() {},
        methods:{
            handleClick() {
                console.log('组件按钮触发')
            }
        }
    }
</script>

<style scoped>
    button {
        height: 30px;
        width: 100px;
        background-color: crimson;
        border-radius: 10px;
    }
</style>