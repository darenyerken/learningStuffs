
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
export default {
    setup() {
        const mytext = ref('')
        const dataList = ref(['aaa','baa','bac','reg','ref'])
        const computedList = computed(()=>
            dataList.value.filter(item=>item.includes(mytext.value))
        )
        return {
            mytext,
            computedList
        }
    }
}
</script>