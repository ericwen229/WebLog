<template lang='pug'>
  #app
    router-view
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
html, body {
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
