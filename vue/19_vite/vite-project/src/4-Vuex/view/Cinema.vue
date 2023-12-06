<template>
    <div>
        cinema
        <select v-model="keyword">
            <option value="1">111</option>
            <option value="2">222</option>
        </select>
        <ul>                   <!--调用vuexgetters方法并传递参数-->
            <li v-for="item in $store.getters.filtCinemaList(keyword)" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data() {
        return {
            keyword: '1'
        }
    },
    // 在离开该网页之前确认是否离开
    beforeRouteLeave(to,from,next) {
        if( to.path !== '/login') {
            const isLeaving = window.confirm('是否离开当前页面')
            if( !isLeaving) next({path:from.path})  // 函数返回false会停止跳转
            else next()
        } else next()
    },
    beforeMount() {
        // 判断状态中的电影院列表是否为空
        if( this.$store.state.CinemaModule.cinemaList.length === 0) {
            // 获取电影数据
            this.$store.dispatch('getCinemaList')
        }
    }
}

</script>
<style scoped>

</style>