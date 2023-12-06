<template>
        <Swiper id="swiper">
                <li>111</li>
                <li>222</li>
                <li>333</li>
                <li>444</li>
                <li>555</li>
                <li>666</li>
        </Swiper>
</template>

<script>
import Swiper from './Swiper.vue';

export default {
    components:{
        Swiper
    }
}
</script>

<style scoped>
    #swiper {
        width: 50vw;
        min-width: 35rem;
        height: 32vw;
        min-height: 25rem;
        margin: 1rem auto;
    }
    li {
        width: 50vw;
        min-width: 35rem;
        height: 32vw;
        min-height: 25rem;
        background-color: #ddd;
        border: 1px black solid;
    }
</style>