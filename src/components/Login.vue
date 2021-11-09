<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 12:29:43
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-09 15:34:31
 * @Description: file content
-->
<template>
  <div id="login">
    <h1>{{ message }}</h1>
    <div id="root">
      <form @submit.prevent="getInfo" method="POST">
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
    //登录
    getInfo() {
      axios.post("/api/login/goTo", this.userInfo).then(
        (response) => {
          console.log(response.data);
          axios.post("/api/article/getUserAllArticle").then(
            (response) => {
              this.$bus.$emit("sendUserAllArticle", response.data);
              console.log(response.data);
            },
            (error) => {
              console.log(error.message);
            }
          );
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
};
</script>
//POST请求

<style>
h1 {
  text-align: center;
}
.root {
  text-align: center;
}
</style>