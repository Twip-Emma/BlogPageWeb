<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-21 08:07:26
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-04 09:32:05
 * @Description: file content
-->
<template>
  <div>
    <button @click="getInfo">点我获取你已发布的文章</button>
    <div>
      <div class="articleItem"
        v-for="item in articleList"
        :key="item.articleId"
        @click="getComment(item.articleId,item.articleTitle,item)"
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
		getComment(articleId,articleTitle,article){
			let res = this.showArticleInfo(articleId)
      res.forEach(element => {
        if(element.articleTitle === articleTitle){
          console.log("这篇文章正文是" + JSON.stringify(element.articleContext))
        }
      });
			// 传递数据
      this.$bus.$emit("sendArticleInfo",article)
		},
    getData() {
      this.articleList = []
      let res;
      var httpRequest = new XMLHttpRequest();
      let url = "/api/article/getUserAllArticle";
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
    showArticleInfo(articleId) {
			console.log("showArticleInfo触发")
      let res;
      var httpRequest = new XMLHttpRequest();
      let url = "/api/article/getUserAllArticle";
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
      httpRequest.send(articleId);
			return res
    }
  },
};

// function getData() {}

export default vm;
</script>

<style scoped>
.articleItem:hover {
  background: #ddd;
}
</style>