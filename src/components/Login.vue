<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 12:29:43
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-15 20:28:55
 * @Description: file content
-->
<template>
  <div id="login">
    <h1>{{ message }}</h1>
    <div id="root">
      <form @submit.prevent="getInfo(userInfo)">
        账号：<input type="text" v-model="userInfo.userCard" /><br />
        密码：<input type="text" v-model="userInfo.userPass" /><br />
        <button type="submit">提交（POST）</button>
      </form>
      <hr />
      <!-- <button @click="getInfo2">点我</button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex"
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      message: "这是登录界面",
      userInfo: {
        userCard: "",
        userPass: "",
      },
    };
  },
  methods: {
    ...mapActions({getInfo:"getInfo"})
  },
};
</script>
<style>
h1 {
  text-align: center;
}
.root {
  text-align: center;
}
</style>