<template>
  <div>
    <h3 style="color: red">Count组件求和为：{{ sum }}</h3>
    <h3>{{ firstPersonName }}</h3>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加王</button>
    <button @click="addPersonServer">随机加一个人名</button>
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
      // return this.$store.state.personList;
      return this.$store.state.personOptions.personList;
    },
    sum() {
      // return this.$store.state.sum;
      return this.$store.state.countOptions.sum;
    },
    firstPersonName() {
      return this.$store.getters['personOptions/firstPersonName'];
    },
  },
  methods: {
    add() {
      const person = {
        id: nanoid(),
        name: this.name,
      };
      // console.log(person)
      // this.$store.commit('ADD_PERSON',person)
      this.$store.commit("personOptions/ADD_PERSON", person);
      this.name = "";
    },
    addWang(){
      const person = {
        id: nanoid(),
        name: this.name,
      };
      this.$store.dispatch('personOptions/addPersonW',person)
      this.name = "";
    },
    addPersonServer(){
      this.$store.dispatch('personOptions/addPersonServer')
    }
  },
};
</script>

<style lang="scss" scoped>
</style>