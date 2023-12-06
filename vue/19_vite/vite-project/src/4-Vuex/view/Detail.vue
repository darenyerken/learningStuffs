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
        // 隐藏tabbar组件
        // this.$store.state.isTabbarShow = false // 这种方式vue调试工具检测不到状态的改变，比较危险
        // // 经过mutation来修改状态更安全
        // 第一个参数写mutation方法名，第二个自定义传参，一般传要改变的状态的值
        this.$store.commit('tabbarShow',false)

        console.log('接受参数 ', this.$route.params.id, '请求数据+渲染页面')
    },
     // 路由发生改变，该组件被复用时候使用
    beforeRouteUpdate(to, from, next) {
        console.log('接受参数 ', to.params.id, '请求数据+渲染页面')
        next() //继续跳转到新的路由
    },
    methods: {
        goBack() {
            this.$router.back() //返回

        },
        goAnother(id) {
            this.$router.push(`/detail/${id}`)
        }
    },

    beforeUnmount() {
        // 重新显示tabbar组件 
        // this.$store.state.isTabbarShow = true // 这种方式vue调试工具检测不到状态的改变，比较危险
        // 经过mutation来修改状态更安全
        // 第一个参数写mutation方法名，第二个自定义传参，一般传要改变的状态的值
        this.$store.commit('tabbarShow',true)
    }
}
</script>
<style scoped></style>