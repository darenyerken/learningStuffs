<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <el-menu class="el-menu-vertical-demo" router :default-active="route.path">
                    <el-menu-item index="/home">
                        <el-icon><House /></el-icon>
                        <span>首页</span>
                    </el-menu-item>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon><Message /></el-icon>
                            <span>新闻管理</span>
                        </template>
                        <el-menu-item index="/editnews">
                            <el-icon><Edit /></el-icon>
                            <span>新闻编辑</span>
                        </el-menu-item>
                        <el-menu-item index="/news">
                            <el-icon><MessageBox /></el-icon>
                            <span>新闻列表</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <h2>新闻管理中心</h2>
                    <h4>欢迎XXXXX</h4>
                </el-header>
                <el-main>
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import {
    House,
    Message,
    Edit,
    MessageBox
} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route)

</script>
<style scoped>
.el-header {
    height: 15vh;
    /* background-color: #95d475; */
    border: 1px solid #ddd;
    padding-top: 1rem;
}

.el-main {
    height: 85vh;
    /* background-color: #d1edc4; */
}

.el-aside {
    height: 100vh;
    width: 25vh;
    /* background-color: #a0cfff; */
}
</style>