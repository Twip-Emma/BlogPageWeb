<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-25 11:13:11
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-27 19:06:23
 * @Description: file content
-->
<template>
  <div id="article_article-model">
      <form @submit.prevent="getArticleInfo" method="POST">
          文章标题<input type="text" v-model="articleInputByUser.articleTitle"><br>
          <textarea cols="30" rows="10" v-model.lazy="articleInputByUser.articleContext"></textarea><br>
          <button type="submit">发布文章</button>
      </form>
  </div>
</template>

<script>
export default {
    name:"Article",
    data() {
        return {
            articleInputByUser:{
                articleTitle:"",
                articleContext:""
            }
        }
    },
    methods:{
        getArticleInfo(){
            console.log(JSON.stringify(this.articleInputByUser))
            let setData = JSON.stringify(this.articleInputByUser)
            reqNewArticle(setData)
        }
    }
}

function reqNewArticle(setData){
  var httpRequest = new XMLHttpRequest();
  let url = "/api/article/newArticle";
  httpRequest.open("POST", url, true);
  httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
  httpRequest.send(setData);

  httpRequest.onreadystatechange = function () {
      let re = httpRequest.responseText;
      console.log(re)
  }
}
</script>

<style>

</style>