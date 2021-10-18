<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 12:29:43
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-18 13:23:55
 * @Description: file content
-->
<template>
  <div>
    <h1>{{ message }}</h1>
    <div id="root">
      <form @submit.prevent="getInfo" method="POST">
          账号：<input type="text" v-model="userInfo.userCard"><br>
          密码：<input type="text" v-model="userInfo.userPass"><br>
          昵称：<input type="text" v-model="userInfo.userName"><br>
        <button type="submit">提交（POST）</button>
      </form>
      <hr />
      <!-- <button @click="getInfo2">点我</button> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
        message:"这是登录界面",
      userInfo: {
        userCard: "",
        userPass: "",
        userName: ""
      }
    };
  },
  methods: {
    getInfo() {
      console.log(JSON.stringify(this.userInfo));
      let userData = JSON.stringify(this.userInfo);
      loadXMLDoc(userData);
    },
  },
};

//POST请求
function loadXMLDoc(userData) {
  var httpRequest = new XMLHttpRequest();
  let url = "/api/register/newUser";
  httpRequest.open("POST", url, true);
  httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
  httpRequest.send(userData);

  httpRequest.onreadystatechange = function () {
    let re = httpRequest.responseText;
    console.log(re);
  };
}
</script>

<style>
h1 {
  text-align: center;
}
</style>