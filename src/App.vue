<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family:'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f4efef;
  /* background-color: black; */
  margin-top: 60px;
}
div { 
  letter-spacing:2px;
  line-height: 50px;
  letter-spacing:2px;
  }
  body {
    background-color: black;
  }



</style>
