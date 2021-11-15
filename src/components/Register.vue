<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 12:29:43
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-15 20:36:30
 * @Description: file content
-->
<template>
  <div id="login">
    <h1>{{ message }}</h1>
    <div id="root">
      <form @submit.prevent="createNewUser(userInfo)" method="POST">
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
import {mapActions} from 'vuex'
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
    ...mapActions({createNewUser:"createNewUser"})
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