<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-21 08:07:26
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-28 09:29:56
 * @Description: file content
-->
<template>
  <div>
    <button @click="getInfo">点我获取当前你的个人信息</button>
    <div>
      <div
        v-for="item in articleList"
        :key="item.articleId"
        @click="getComment(item)"
      >
        {{ item.articleTitle }}
      </div>
      <div id="articleInfo"></div>
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
		getComment(item){
			let res = this.showArticleInfo(item)
			console.log(res + "|||res")
		},
    getData() {
      let res;
      var httpRequest = new XMLHttpRequest();
      let url = "/api/userInfo/getUserAllArticle";
      httpRequest.open("POST", url, false);
      httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
      httpRequest.onreadystatechange = function () {
        let re = httpRequest.responseText;
        // console.log(re + "-");
        if (re === "") {
          console.log("你还未登录，请先登录");
        } else {
          // console.log(re);
          var data = JSON.parse(decodeURIComponent(re));
          res = data;
          // console.log(data);
        }
      };
      httpRequest.send();

      for (var key in res) {
        // console.log(res[key]);
        // console.log(this);
        this.articleList.push(res[key]);
      }
    },
    showArticleInfo(article) {
			console.log("showArticleInfo触发")
      let res;
      var httpRequest = new XMLHttpRequest();
      let url = "/api/userInfo/getUserAllArticle";
      httpRequest.open("POST", url, false);
      httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
      httpRequest.onreadystatechange = function () {
        let re = httpRequest.responseText;
        if (re === "") {
          console.log("你还未登录，请先登录");
        } else {
          var data = JSON.parse(decodeURIComponent(re));
          res = data;
        }
      };
      httpRequest.send(article.articleId);
			return res
    },
  },
};

// function getData() {}

export default vm;
</script>

<style>
</style>