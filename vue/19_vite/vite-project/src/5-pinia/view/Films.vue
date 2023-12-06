<template>
    <div>
        <h1>Films</h1>
            <router-link to="/films/nowplaying" custom v-slot="{isActive, navigate}">
                <button @click="navigate" :class="isActive?'active':''">正在热映</button>
            </router-link>
        <router-link to="/films/comingsoon" custom v-slot="{isActive, navigate}">
            <button @click="navigate" :class="isActive?'active':''">敬请期待</button>
        </router-link>
        <router-view></router-view>
    </div>
</template>
<script setup>

</script>
<style scoped>
.active {
    color: red;
}
</style>