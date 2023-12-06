<template>
    <div>
        <input type="text" v-model="iptText">{{ iptText }}
        <input type="text" v-model="iptText2">{{ iptText2 }}
    </div>
</template>
<script>
import { watch, ref } from 'vue';

export default {
    setup() {
        const iptText = ref('')
        const iptText2 = ref('')

        // 第一种用法，传响应式对象
        // watch(iptText,(newValue,oldValue)=>{
        //     console.log('In watch ',newValue,' ',oldValue)
        // })
        // 第二种用法,传具体属性
        // watch(()=>iptText.value, (newValue, oldValue) => {
        //     console.log('In watch ', newValue, ' ', oldValue)
        // })
        // 第三个参数，是否初始化时候执行，是否深度监听
        // watch(iptText,(newValue,oldValue)=>{
        //     console.log('In watch ',newValue,' ',oldValue)
        // },{immediate:true})
        // 可以多个监听源 

        // watchEffect
        // 初始化时候就执行一次，不需要传参自动侦测依赖
        // 参数是异步回调函数
        watch([iptText,iptText2],(newValue,oldValue)=>{
            console.log('In watch ',newValue,' ',oldValue)
        })

        return {
            iptText,
            iptText2
        }
    }
}
</script>