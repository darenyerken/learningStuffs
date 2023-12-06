<template>
    <div>
        App
        <div>
            {{ obj.name }}
            <br>
            {{ obj.num }}
        </div>
        <button @click="handleClick">button</button>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        // reactive写法
        // 只能绑定引用数据类型
        const obj = reactive({
            name:'kaka',
            num:10
        })

        const handleClick = function(){
            obj.name='cristin'
            obj.num=7
        }

        return {
            obj,
            handleClick
        }
    }
}
</script>