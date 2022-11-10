<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,
body {
  margin: 0 0 0 0;
  width: 100vw;
  height: 100vh;}
#app {
  display: flex;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background: #fff;
}
a { color: inherit; } 
</style>
