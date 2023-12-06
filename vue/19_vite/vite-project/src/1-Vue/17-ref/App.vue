<template>
    <div>
        App
        <div>
            {{ myName }}
            <p>{{ myNum }}</p>
        </div>
        <button @click="handleClick">button</button>
        <br>
        <input type="text" v-model="mytext">{{ mytext }}
    </div>
</template>

<script>
// v-model依然好使
// this用法不同了
// function写法中this指向正常可用,箭头函数写法中this是undefined

import {ref} from 'vue'
    export default {
        setup() {
            // ref写法,可以绑定基本数据类型
            const myName = ref('kaka') //相当于 new Proxy({value:kaka})
            const myNum = ref(10)
            const handleClick = function(){
                myName.value = 'Cristin'
                myNum.value = 7
                console.log(this.myName)
                console.log(this.myNum)
            }

            const mytext = ref('')
            return {
                myName,
                myNum,
                handleClick,
                mytext
            }
        }
    }
</script>