<template>
    <div class="top_bgi">
        <!-- <h1>MyInformation</h1> -->
        <div class="avatar"></div>
    </div>
    <van-row>
        <van-col class="cols" span="8"><van-icon name="shopping-cart"/> 订单</van-col>
        <van-col class="cols" span="8"><van-icon name="star"/> 收藏</van-col>
        <van-col class="cols" span="8"><van-icon name="friends"/> 好友</van-col>
    </van-row>
    <van-cell-group>
        <van-cell size="large" title="个人信息"  />
        <van-cell size="large" title="账户管理"  />
        <van-cell size="large" title="电影券"  />
        <van-cell size="large" title="咨询与客服"  />
        <van-cell size="large" title="设置" is-link icon="setting"/>
    </van-cell-group>
</template>
<script>
export default {
    // 组件内路由守卫
    // beforeRouterEnter在VCA中没有函数来使用，VCA写法中可以在router配置里面对此页面进行配置
    beforeRouteEnter(to, from, next) {
        // 是否授权
        let isAuthencated = localStorage.getItem("token")
        if (!isAuthencated) {
            next({ name: 'login' })
        } else next()
    }
}
</script>
<script setup>
import { Icon as VanIcon } from 'vant';
// 局部导入组件库
import {
    Cell as VanCell, CellGroup as VanCellGroup,
    Row as VanRow, Col as VanCol
} from 'vant'
// import 'vant/lib/index.css'

</script>
<style scoped lang="scss">

// 背景图及头像
.top_bgi {
    width: 100%;
    height: 35vh;
    background-image: url('GodFather.jpg');
    background-size: 100%;
    background-position: center bottom;
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 40%;
    position: relative;

    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #fff;
        background-image: url('Mike.jpg');
        background-size: cover;
        background-position: center;

        position: absolute;
        bottom: 15px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
}

.cols {
    text-align: center;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    color: #666;
}
</style>