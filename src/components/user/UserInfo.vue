<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-21 08:07:26
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-27 21:24:23
 * @Description: file content
-->
<template>
  <div>
    <button @click="getInfo">点我获取当前你的个人信息</button>
    <div>
      <div v-for="item in articleList" :key="item.articleId">
        {{ item.articleTitle }}
      </div>
    </div>
  </div>
</template>

<script>
let vm = {
  name: "UserInfo",
  data() {
    return {
      articleList: [],
    };
  },
  methods: {
    getInfo() {
      this.getData();
      // this.articleList.push({ title: "额外的文章" });
    },
    getData() {
      let res;
      var httpRequest = new XMLHttpRequest();
      let url = "/api/userInfo/getUserAllArticle";
      httpRequest.open("POST", url, false);
      httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
      httpRequest.onreadystatechange = function () {
        let re = httpRequest.responseText;
        // console.log(re);
        if ("请先登录" === re) {
          // console.log(re);
        } else {
          console.log(re);
          var data = JSON.parse(decodeURIComponent(re));
          res = data;
          console.log(data);
        }
      };
      httpRequest.send();
      
      for (var key in res) {
        console.log(res[key]);
        console.log(this);
        this.articleList.push(res[key]);
      }
    },
  },
};

// function getData() {}

export default vm;
</script>

<style>
</style>