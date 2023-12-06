<template>
    <div>
        child
        <button id="btn" @click="handleClick" :style="{width: buttonWidth}">button加长</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            buttonWidth:'fit-content'
        }
    },
    beforeCreate() {
        console.log("Child---beforeCreate");
    },
    created() {
        console.log("Child---created");
    },
    beforeMount() {
        console.log("Child---beforeMount");
    },
    mounted() {
        console.log("Child---mounted");
    },
    beforeUpdate(){
        console.log('Child-BeforeUpdate')
    },  
    updated(){
        console.log('Child-updated')
    },
    methods: {
        handleClick() {
            this.buttonWidth = "300px";
        }
    },
    beforeUnmount(){
        console.log('Child---beforeUnmount')
    },
    unmounted() {
        console.log('Child---unmounted')
    }

}
</script>