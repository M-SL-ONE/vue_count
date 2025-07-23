<template>
  <div>
    <h3  style="color: red;">Count组件求和为：{{ sum }}</h3>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "PersonItem",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum(){
        return this.$store.state.sum;
    }
  },
  methods: {
    add() {
      const person = {
        id: nanoid(),
        name: this.name,
      };
      // console.log(person)
      this.$store.commit('ADD_PERSON',person)
      this.name = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>