<template>
  <div id="app">
    <!-- Nav principal -->
    <Navbar/>
    <b-container>
      <menu1/>
      <menu2/>
      <menu3/>
      <articulos/>
    </b-container>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar'
import menu1 from './components/menu1'
import menu2 from './components/menu2'
import menu3 from './components/menu3'
import articulos from './components/articulos'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Navbar,
    menu1,
    menu2,
    menu3,
    articulos
  }
}
</script>

<style>
*::before,
*::after,
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}
a {
    text-decoration: none;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
