<template>
    <div>
        <ul>
            <li v-for="item of datalist" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                datalist:['首页','A','B']
            }
        }
    }
</script>

<style scoped>
ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
</style>