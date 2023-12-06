<template>
    <div>
        App
        <br>
        text:{{ text }}
        <br>
        <button id="btn" @click="handleClick" :style="{width: buttonWidth}">button加长</button>
        <br>
        <button @click="isCreate = !isCreate">删除子组件</button>
        <Child v-if="isCreate"/>
    </div>
</template>

<script>
import Child from './Child.vue'

// vue生命周期是从根节点开始从上到下create并从下到上mount
// 父组件在beforeMount时候create子组件，整个过程像个V字
// 子组件更新一般不影响父组件

// 销毁生命周期的存在用处之一就是有些dom节点可能绑定一些方法到事件，删除节点并不会解绑，需要手动解绑
export default {
    data() {
        return {
            text: 111,
            buttonWidth: "fit-content",
            nothing: 111,
            isCreate:true
        };
    },
    beforeCreate() {
        console.log("beforeCreate", " btn-", document.querySelector("#btn"), " text-", this.text);
    },
    created() {
        console.log("created", " btn-", document.querySelector("#btn"), " text-", this.text);
    },
    beforeMount() {
        console.log("beforeMount", " btn-", document.querySelector("#btn"), " text-", this.text, " button-", document.querySelector("button"));
    },
    mounted() {
        console.log("mounted", " btn-", document.querySelector("#btn"), " text-", this.text);
    },
    beforeUpdate() {
        console.log("beforeUpdate", " buttonWidth-", this.buttonWidth, " widthOfTheDom:", document.querySelector("#btn").style.width);
    },
    updated() {
        console.log("updated", " buttonWidth-", this.buttonWidth, " widthOfTheDom:", document.querySelector("#btn").style.width);
    },
    methods: {
        handleClick() {
            this.buttonWidth = "300px";
        }
    },
    components: { Child }
}
</script>