<template>
    <div>
        Child
        <button @click="handleClick">button</button>
    </div>
</template>
<script>
import { ref ,getCurrentInstance} from 'vue';

export default {
    setup(){
        const text = ref('bbbaaa')
        // 获取当前组件实例
        const _this = getCurrentInstance()
        const handleClick = ()=> {
            console.log(_this.parent)
        }
        return {
            text,
            handleClick
        }
    }

}
</script>