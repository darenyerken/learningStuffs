<template>
    <div class="app">
        App
        <!-- slot插槽 -->
        <!-- 无指定标签会对应无名插槽，把每个无指定标签放进每个无名插槽 -->
        <!-- 插槽定义name属性就是插槽名，标签外套template中指定插槽名（注意变量传递而不是字符串） -->
        <!-- 插槽特性：父组件中的插槽标签与子组件中的插槽定义的状态相互不影响 -->
        <!-- 子组件可以通过作用域插槽给父组件传递数据，dataFromButton1就是插槽作用域， -->
        <!-- 只能在这个插槽内使用 -->
        <Child>
            <template v-slot:left="dataFromButton1">
                <button @click="hdClick">{{ dataFromButton1.myvalue1 }}前进{{ dataFromButton1.myvalue2 }}</button>
            </template>
            <template v-slot>
                <b>标题</b>
            </template>
            <template v-slot:right>
                <button @click="handleClick">后退</button>
            </template>
        </Child>
        <img src="vite.svg">
        <span v-html="pic"></span>
    </div>
</template>

<script>
import axios from 'axios'
import Child from './Child.vue';
export default {
    components:{
        Child
    },
    data(){
        return {
            pic:'<h1>123</h1>'
        }
    },
    methods:{
        hdClick(){
            console.log('子组件内的 前进 按钮被点击 ')
        },
        handleClick(){
            axios({
                method:'GET',
                url:'vite.svg'
            }).then(res=>{this.pic = res.data})
        }
    }
}
</script>

<style scoped>
    .app {
        background-color: yellow;
    }
</style>