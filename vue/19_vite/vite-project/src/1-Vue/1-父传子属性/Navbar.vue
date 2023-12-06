<template>
    <div> 
        <ul>
            <li v-for="item of datalist" :key="item">{{ item }}</li>
        </ul>
        {{ left }}{{ right }}{{ now }}{{ before }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                datalist:['首页','A','B']
            }
        },
        // props:['left','right','now','before']   //由父向子单向传递
        props:{
            left:[String,Boolean],   //left值可以是string或者是布尔
            right:{
                required:true,
                type:String
            },
            now:{
                required:true,   // 校验是否必须,默认false
                validator(value){
                    return ['现在','Now','now'].includes(value)   //必须是返回的数组元素之一
                }
            },
            before:{
                validator(value ){
                    return ['以前','之前'].includes(value)
                },
                default:'以前'   //不传值就默认
            }
        }
    }
</script>

<style scoped>
ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>