<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 12:29:43
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-09 13:54:24
 * @Description: file content
-->
<template>
  <div id="login">
    <h1>{{ message }}</h1>
    <div id="root">
      <form @submit.prevent="getInfo" method="POST">
          账号：<input type="text" v-model="userInfo.userCard"><br>
          密码：<input type="text" v-model="userInfo.userPass"><br>
          昵称：<input type="text" v-model="userInfo.userName"><br>
        <button type="submit">提交（POST）</button>
      </form>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        message:"这是注册界面",
      userInfo: {
        userCard: "",
        userPass: "",
        userName: ""
      }
    };
  },
  methods: {
    //注册
    getInfo() {
      axios.post("/api/register/newUser",this.userInfo).then(
        response => {
          console.log(response.data)
        },
        error => {
          console.log(error.message)
        }
      )
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
.root{
  text-align: center;
}
</style>