<template>
    <div>
        app
        <Child v-model="myvalue"/>
        <button @click="hdClick">注册</button>
    </div>
</template>

<script>
import Child from './Child.vue';
    export default {
        components: {
            Child
        },
        data() {
            return {
                myvalue:''
            }
        },
        methods:{
            hdClick() {
                console.log(this.myvalue)
            }
        }
    }
</script>