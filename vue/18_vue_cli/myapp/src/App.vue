<template>
  <ul :style="{ border: '3px black solid', padding: '20px' }">
    <h1>购物车</h1>
    <input type="checkbox" value="all" v-model="allSelected">全选/全不选
    <template v-for="item of goodList" key="title">
      <li v-if="item.count > 0" :style="liStyle">
        <input type="checkbox" :value="item.title" v-model="selectedList">
        <img :src="item.imgUrl" :height="140">
        <div>
          <p>商品名：{{ item.title }} </p>
          <p>价格：{{ item.price }} </p>
        </div>
        <div>
          <button @click="item.count--" style="width: 15px;">-</button>
          <span> &nbsp;{{ item.count }}&nbsp; </span>
          <button @click="item.count++" style="width: 15px;">+</button>
        </div>
        <button @click="deleteGood(item.title)">删除</button>
      </li>
    </template>
    <p v-if="this.goodList.length === 0" style="margin: 10px;">购物车空空如也</p>
    <div style="font-size: 20px;">总金额: {{ sum }} </div>
  </ul>
  <img src="" alt="">
</template>

<script>

export default {
  data() {
    return {
      selectedList: [],
      liStyle: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '150px',
        border: '1px black solid',
        padding: '0 20px'
      },
      goodList: [
        {
          title: 'AJ男鞋',
          price: 500,
          imgUrl: 'images/AJ.jpg',
          count: 1
        },
        {
          title: 'NIVIDA4060显卡',
          price: 7000,
          imgUrl: 'images/4060.jpg',
          count: 1
        },
        {
          title: '男士夹克',
          price: 800,
          imgUrl: 'images/jacket.jpg',
          count: 1
        },
      ]
    }
  },
  computed: {
    sum() {
      let sum = 0
      this.goodList.forEach((item) => {
        if (this.selectedList.includes(item.title)) {
          sum += item.count * item.price
        }
      })
      return sum
    },
    allSelected: {
      get() {
        return this.selectedList.length === this.goodList.length &&
          this.selectedList.length !== 0
      },
      set(value) {
        if (value) {
          this.selectedList = this.goodList.map(item => item.title)
        } else {
          this.selectedList = []
        }
      }
    }
  },
  methods: {
    deleteGood(goodTitle) {
      for (let i = 0; i < this.goodList.length; i++) {
        if (this.goodList[i].title === goodTitle) {
          this.goodList.splice(i, 1)
        }
      }
      for (let i = 0; i < this.selectedList.length; i++) {
        if (this.selectedList[i] === goodTitle) {
          this.selectedList.splice(i, 1)
        }
      }
    }
  }
}
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
}

#box {
  width: 1000px;
  height: fit-content;
  margin: auto;
} */
</style>
