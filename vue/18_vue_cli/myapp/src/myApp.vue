<template>
    <div class="mainstyle">
        {{ mytext }}
    </div>
    <side-button></side-button>
</template>

<style scoped>
    .mainstyle {
        width: 300px;
        height: 100px;
        background-color: yellowgreen;
    }
</style>

<script>
    import sideButton from './components/sideButton.vue'
    export default {
        data() {
            return {
                mytext:'myApp-div'
            }
        },
        components:{
            "side-button":sideButton
        }
    }
</script>