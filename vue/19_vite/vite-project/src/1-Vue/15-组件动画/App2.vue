<template>
    <div id="box">
        <input type="text" v-model="inputText">
        <button @click="add">add</button>
        <!-- 内含多个标签可以用这个标签，会自动将这个标签转换为tag指定的标签 -->
        <TransitionGroup tag="ul" name="kaka">
            <li v-for="item, index in memList" :key="item">
                {{ item }}
                <button @click="del(index)">del</button>
            </li>
        </TransitionGroup>
        <div v-show="memList.length === 0">暂无内容</div>
    </div>
</template>

<script>
export default {
    data() {        //放属性
        return {
            inputText: '',
            memList: ['aaa', 'bbb', 'ccc']
        }
    },
    methods: {      //放方法
        add() {
            this.memList.push(this.inputText)
            this.inputText = ''
        },
        del(memIndex) {
            this.memList.splice(memIndex, 1)
        }
    }
}
</script>

<style>
.kaka-enter-from,
.kaka-leave-to {
    transform: translate(100px);
    opacity: 0;
}

.kaka-leave-active,
.kaka-enter-active {
    transition: .5s 0s ease all;
}

.kaka-move {
    transition: .5s 0s ease all;
}
.kaka-leave-active {
    position: absolute;
}
</style>