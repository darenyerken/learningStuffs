<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="新闻标题">
            <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="新闻类型">
            <el-select v-model="form.category" placeholder="请选择新闻类型">
                <el-option label="经济" value="经济" />
                <el-option label="科技" value="科技" />
                <el-option label="娱乐" value="娱乐" />
            </el-select>
        </el-form-item>
        <el-form-item label="新闻内容">
            <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">创建新闻</el-button>
            <el-button @click="onReset">重置</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script setup>
import { reactive } from 'vue'
import useNewsStore from '../store/newStore'

const store = useNewsStore()

// do not use same name with ref
const form = reactive({
    title: '',
    category: '',
    content:''
})

const onSubmit = () => {
    console.log('submit!')
    store.addNews({...form})
    console.log(store.newsList)
}

const onReset = () => {
    form.title = ''
    form.category = ''
    form.content = ''
}
</script>
  