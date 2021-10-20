<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-17 22:46:46
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-20 21:03:32
 * @Description: file content
-->
<template>
  <div>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />

      <hr />
      <Login></Login>
      <hr />
      <Register></Register>
    </div>
    <!-- <hr> -->
    <!-- <Rotation/> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Register,
    Login,
  },
};
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
