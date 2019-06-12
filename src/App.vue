<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav></Nav>
    <router-view></router-view>
    <!-- <AdminPage/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AdminPage from './components/AdminPage.vue';
import Nav from'./components/utils/Nav';

export default {
  name: 'app',
  components: {
    AdminPage,
    Nav,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color:inherit;
}
html, body { font-family: Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, sans-serif;}
</style>
