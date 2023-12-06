<template>
    <div>
        App
        {{ text }}
        <button id="btn"></button>
    </div>
</template>

<script>
// vue生命周期是从根节点开始从上到下create并从下到上mount
// 父组件在beforeMount时候create子组件，整个过程像个V字
// 子组件更新一般不影响父组件
export default {
    data() {
        return {
            text:111
        }
    },
    beforeCreate() {
        // 此时模板还未初始化，data、methods 中的数据还没创建
        console.log('beforeCreate',' btn-',document.querySelector('#btn'),
        ' text-',this.text)
    },
    created() {
        // 此时有了data但是dom节点还没创建,模板初始化完成
        console.log('created',' btn-',document.querySelector('#btn'),
        ' text-',this.text)
    },
    beforeMount() {
        // 模板在内存加载完成，还未渲染到页面上
        console.log('beforeMount',' btn-',document.querySelector('#btn'),
        ' text-',this.text,' button-',document.querySelector('button'))
    },
    mounted() {
        // 整个节点已经创建完毕 
        console.log('mounted',' btn-',document.querySelector('#btn'),
        ' text-',this.text)
    }
}
</script>