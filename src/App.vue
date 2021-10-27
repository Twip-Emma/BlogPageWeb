<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-17 22:46:46
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-27 19:08:12
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
      <hr>
      <UserInfo></UserInfo>
      <hr>
      <Article></Article>
    </div>
    <!-- <hr> -->
    <!-- <Rotation/> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import UserInfo from "./components/user/UserInfo.vue"
import Article from "./components/article/Article.vue"

export default {
  name: "App",
  components: {
    HelloWorld,
    Register,
    Login,
    UserInfo,
    Article
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
