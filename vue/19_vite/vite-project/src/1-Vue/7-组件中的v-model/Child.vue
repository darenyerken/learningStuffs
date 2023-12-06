<template>
    <div>
        Child
        <input type="text" :value="modelValue" @input="hdInput">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            hdInput(evt) {
                this.$emit('update:modelValue',evt.target.value)
            }
        },
        props:['modelValue']
    }
</script>