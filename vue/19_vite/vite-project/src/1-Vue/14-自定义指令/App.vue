<template>
    <div>
        App
        <button v-cr7-directive="btnColor">按钮</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            btnColor: 'white'
        }
    },
    directives: {
        // 自定义指令对象写法，可以写生命周期
        // CR7:{
        //     // mounted只在该dom节点被创建时才生效
        //     mounted(elem,a){
        //         console.log( elem,' CR7 is mounted ',a.value)
        //     },
        //     updated(elem,binding) {
        //         elem.style.color = binding.value 
        //         console.log('CR7 is updated')
        //     }
        // }

        // 函数式写法，在dom节点初始化和每一次 更新时都会引用
        CR7(elem, binding) {
            console.log('自定义指令函数式写法', elem, binding.value)
            elem.style.color = binding.value
        }
    }
}
</script>