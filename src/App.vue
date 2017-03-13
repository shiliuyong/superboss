<template>
  <div id="app">
    <jd-head />
    <div id="container">
      <router-link to="/hello">hello</router-link>
      <router-view></router-view>
    </div>
    <jd-foot />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
