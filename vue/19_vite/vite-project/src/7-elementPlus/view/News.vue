<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <h5 class="grid-content ep-bg-purple title">新闻标题</h5>
        </el-col>
        <el-col :span="6">
            <h5 class="grid-content ep-bg-purple category">新闻类型</h5>
        </el-col>
        <el-col :span="12">
            <h5 class="grid-content ep-bg-purple content">新闻内容</h5>
        </el-col>
    </el-row>
    <el-row :gutter="20" v-for="item in store.newsList">
        <el-col :span="6">
            <div class="grid-content ep-bg-purple title">{{ item.title }}</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple category">{{ item.category }}</div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content ep-bg-purple content">{{ item.content }}</div>
        </el-col>
    </el-row>
</template>
<script setup>
import useNewsStore from '../store/newStore';

const store = useNewsStore()
</script>
<style scoped>
.el-row {
    margin-bottom:1rem;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    line-height: 36px;
}
.title {
    background-color: #d9ecff;
}
.content {
    background-color: #d9ecff;
}
.category {
    background-color: #a0cfff;
}
</style>