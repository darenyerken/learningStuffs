<template>
    <div>
        <Transition name="kaka" enter-active-class="animate__animated animate__backInLeft"
        leave-active-class="animate__animated animate__backOutRight" appear="true">
            <div id="box">
            </div>
        </Transition>
    </div>
</template>

<script>
// 动画用法
import 'animate.css'
</script>

<style>
#box {
    width: 200px;
    height: 200px;
    background-color: aqua;
    margin: 100px auto;
    animation-duration: 1.5s;
}
</style>