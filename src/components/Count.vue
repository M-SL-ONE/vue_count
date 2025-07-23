<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为：{{ bigSum }}</h1>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations ,mapActions } from 'vuex';
export default {
  name: "CountItem",
  data() {
    return {
      n: 1, // 用户选择的数字
    };
  },
  computed:{

    // sum(){
    //     return this.$store.state.sum
    // },

    // 借助mapState生成计算属性，从state中读取数据（对象写法））
    // ...mapState({sum:'sum'}),

    // 借助mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState(['sum']),

    // bigSum(){
    //     return this.$store.getters.bigSum
    // }

    // 借助mapState生成计算属性，从state中读取数据（对象写法））
    ...mapGetters({bigSum:'bigSum'}),

    // 借助mapState生成计算属性，从state中读取数据（数组写法）
    // ...mapGetters(['bigSum'])
  },
  methods: {
    // increment() {
    //   //   this.sum += this.n;
    // //   this.$store.dispatch("add", this.n);
    //   this.$store.commit("ADD", this.n);
    // },
    // decrement() {
    //   //   this.sum -= this.n;
    // //   this.$store.dispatch("jian", this.n);
    //   this.$store.commit("JIAN", this.n);
    // },

    // 借助mapMutations生成计算属性，从state中读取数据（对象写法））
    ...mapMutations({increment:`ADD`,decrement:"JIAN"}),

    /**
     * 
     */
    // incrementOdd() {
    //   // if(this.sum%2!=0) return alert('当前不是奇数')
    //   // this.sum += this.n;
    // //   if (this.$store.state.sum % 2) 
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // incrementWait() {
    //   // setTimeout(() => {
    //   //     this.sum += this.n;
    //   // }, 500);
    //   this.$store.dispatch("addWait", this.n);
    // //   setTimeout(() => {
        
    // //   }, 500);
    // },
    
    // 借助mapActions生成计算属性，从state中读取数据（对象写法））
    ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'})
  },
  mounted() {
    // console.log(this)
    // const x = mapState({sum:'sum'})
    // console.log(x)
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 5px;
}
</style>