<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <CountItem/>
    <hr>
    <PersonItem/>
  </div>
</template>

<script>
import CountItem from './components/Count.vue'
import PersonItem from './components/Person.vue'

export default {
  name: 'App',
  components: {
    CountItem,PersonItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
