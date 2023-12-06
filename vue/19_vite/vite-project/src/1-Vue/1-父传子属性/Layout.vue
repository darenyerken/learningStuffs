<template>
    <div>  <!--这里div接受了父组件的属性透传，包括事件点击和stylescoped添加的自定义属性-->
    <!-- 此组件内对样式的定义会和父组件对此组件的样式定义会结合，相同样式会覆盖父组件的样式  -->
        <Sidebar class="sidebar"></Sidebar>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    export default {
        inheritAttrs:true,   //是否把&attrs绑定在最外层标签上，默认为true; $attrs可以放在任意标签上
        components:{
            Sidebar
        }
    }
</script>

<style scoped>
.sidebar {
    width: 10vw;
    height: 100%;
    background-color: aliceblue;
}
div {
    background-color: blueviolet; /*覆盖父组件的backgroundcolor定义 */
}
</style>