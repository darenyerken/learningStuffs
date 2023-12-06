<template>
    <div>
        <button @click="isShow = !isShow">button</button>
        <!-- Transition标签中只能存在一个标签，但可以用ifelse语句 -->
        <!-- mode配合ifelse语句控制进出顺序 -->
        <!-- 可以写transition也可以写动画  -->
        <Transition name="kaka" appear="true" mode="out-in">
            <p v-if="isShow">123456</p>
            <p v-else>654312</p>
        </Transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow:true
            }
        }
    }
</script>

<style>
/* 定义进出位置  */
/* .kaka-enter-from{
    transform: translate(100px);
    opacity: 0;
}
.kaka-enter-to {
    transform: translate(0px);
    opacity: 1;
}
.kaka-leave-from{
    transform: translate(0px);
    opacity: 1;
}
.kaka-leave-to{
    transform: translate(100px);
    opacity: 0;
} */
/* 以上可以简写为 */
.kaka-enter-from,
.kaka-leave-to{
    transform: translate(100px);
    opacity: 0;
}

/* 定义动画 */
.kaka-leave-active,
.kaka-enter-active {
    transition: .5s  0s ease all;
}

/* 当有多个dom节点，在轮换时候的动画 */
.kaka-move {
    transition: .5s 0s ease all;
}
.kaka-leave-active {
    position: absolute;
}
</style>