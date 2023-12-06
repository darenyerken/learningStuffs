<template>
    <div>
        <input type="text" v-model="text" autofocus>
        <button @click="addMem">add</button>
        <ul>
            <li v-for="item,index of memList" :key="item">
                {{ item }}
                <button @click="deleteMem(index)">del</button>
            </li>
            <span v-if="memList.length === 0">暂无内容</span>
        </ul>
    </div>
</template>
<script setup>
import useTodolist from './hooks/useTodolist';
const {text, memList, addMem, deleteMem} = useTodolist()
</script>
<style scoped>

</style>