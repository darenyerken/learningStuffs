<template>
    <div>
        <!-- to 写css选择器 -->
        <Teleport to="body">
            <button>按钮</button>
        </Teleport>
    </div>
</template>
<script setup>
// 例如我们需要一个登录模态框，其位置需要position：fixed
// position: fixed 能够相对于浏览器窗口放置有一个条件，
// 那就是不能有任何祖先元素设置了 transform、perspective 或者 filter 样式属性
// 也就是说如果我们想要用 CSS transform 为祖先节点 <div class="outer"> 设置动画，
// 就会不小心破坏模态框的布局！
</script>
<style scoped>

</style>