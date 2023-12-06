<template>
    <div>
        <button @click="goBack">&lt;</button>
        detail
        <div @click="goAnother(6643)">猜你喜欢</div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log('接受参数 ', this.$route.params.id, '请求数据+渲染页面')
    },
     // 路由发生改变，该组件被复用时候使用
    beforeRouteUpdate(to, from, next) {
        console.log('接受参数 ', to.params.id, '请求数据+渲染页面')
        next() //继续跳转到新的路由
    },
    // 路由发生改变，该组件被复用时候使用,第二种方法
    // watch:{
    //     '$route.params':function() {
    //         console.log('接受参数 ',this.$route.params.id, '请求数据+渲染页面')
    //     }
    // },
    methods: {
        goBack() {
            this.$router.back() //返回
            // this.$router.go(-1)

            // this.$router.forward() //前进
            // this.$router.go(1)
        },
        goAnother(id) {
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>
<style scoped></style>