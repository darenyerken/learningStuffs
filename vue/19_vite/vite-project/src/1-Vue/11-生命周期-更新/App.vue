<template>
    <div>
        App
        <br>
        text:{{ text }}
        <br>
        <button id="btn" @click="handleClick" :style="{width: buttonWidth}">button加长</button>
    </div>
</template>

<script>
// vue生命周期是从根节点开始从上到下create并从下到上mount
// 父组件在beforeMount时候create子组件，整个过程像个V字
// 子组件更新一般不影响父组件

// 无dom节点的改变并不会触发更新生命周期
export default {
    data() {
        return {
            text:111,
            buttonWidth:'fit-content',
            nothing:111
        }
    },
    beforeCreate() {
        console.log('beforeCreate',' btn-',document.querySelector('#btn'),
        ' text-',this.text)
    },
    created() {
        console.log('created',' btn-',document.querySelector('#btn'),
        ' text-',this.text)
    },
    beforeMount() {
        console.log('beforeMount',' btn-',document.querySelector('#btn'),
        ' text-',this.text,' button-',document.querySelector('button'))
    },
    mounted() {
        console.log('mounted',' btn-',document.querySelector('#btn'),
        ' text-',this.text)
    },
    beforeUpdate(){
        // 此时模板状态已经修改完毕，但dom节点还未改变
        console.log('beforeUpdate',' buttonWidth-',this.buttonWidth,
        ' widthOfTheDom:',document.querySelector('#btn').style.width)
    },
    updated() {
        // 此时dom节点已经改变
        console.log('updated',' buttonWidth-',this.buttonWidth,
        ' widthOfTheDom:',document.querySelector('#btn').style.width)
    },
    methods:{
        handleClick() {
            this.buttonWidth = '300px'
            // this.nothing = 222   // 无dom节点的改变并不会触发更新生命周期
        }
    }
}
</script>