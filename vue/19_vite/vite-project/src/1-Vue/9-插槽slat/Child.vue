<template>
    <div>
        Child
        <slot name="left"  :myvalue1="'asd'" :myvalue2="'zxc'"></slot>
        <slot></slot>
        <slot name="right"></slot>
    </div>
</template>

<style scoped>
    div{
        background-color: aqua;
    }
</style>