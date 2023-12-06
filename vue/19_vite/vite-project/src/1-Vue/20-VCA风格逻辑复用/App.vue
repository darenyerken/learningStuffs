<template>
    <div>
        <input type="text" v-model="mytext">
        <ul>
            <li v-for="item in computedList" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
// computed也是函数式的用法
import {ref,computed} from 'vue'
import {useSearch} from './search'
export default {
    setup() {
        const mytext = ref('')
        const dataList = ref([])
        setTimeout(()=>{
            dataList.value = ['aaa','baa','bac','reg','ref']
        },2000)
        // const computedList = computed(()=>
        //     dataList.value.filter(item=>item.includes(mytext.value))
        // )
        const computedList = useSearch(mytext,dataList)
        return {
            mytext,
            computedList
        }
    }
}
</script> 