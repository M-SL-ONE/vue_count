<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "CountItem",
  data() {
    return {
      n: 1, // 用户选择的数字
    };
  },
  methods: {
    increment() {
      //   this.sum += this.n;
    //   this.$store.dispatch("add", this.n);
      this.$store.commit("ADD", this.n);
    },
    decrement() {
      //   this.sum -= this.n;
    //   this.$store.dispatch("jian", this.n);
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      // if(this.sum%2!=0) return alert('当前不是奇数')
      // this.sum += this.n;
    //   if (this.$store.state.sum % 2) 
      this.$store.dispatch("addOdd", this.n);
    },
    incrementWait() {
      // setTimeout(() => {
      //     this.sum += this.n;
      // }, 500);
      this.$store.dispatch("addWait", this.n);
    //   setTimeout(() => {
        
    //   }, 500);
    },
  },
  mounted() {
    // console.log(this)
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 5px;
}
</style>