<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-04 08:59:35
 * @LastEditors: 七画一只妖
<<<<<<< HEAD
 * @LastEditTime: 2021-11-09 15:29:54
=======
 * @LastEditTime: 2021-11-08 11:13:59
 * @Description: file content
-->
<template>
  <div>
    <h1>{{ articleData.articleTitle }}</h1>
    <!-- <h5>文章id:{{ articleData.articleId }}</h5>
    <h5>用户id:{{ articleData.userId }}</h5> -->
    <p>{{ articleData.articleContext }}</p>
    <div>
      来自用户：{{articleData.userName}}
    </div>
    <h6>
      喜欢：{{ articleData.articleGoodEl }}，不喜欢：{{
        articleData.articleBadEl
      }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "ArticleInfo",
  props: [""],
  data() {
    return {
      articleData: "",
      userName:""
    };
  },
  methods: {
    sendArticleInfo(articleInfo,userName) {
      this.articleData = {
        articleId: articleInfo.articleId,
        userId: articleInfo.userId,
        articleTitle: articleInfo.articleTitle,
        articleContext: articleInfo.articleContext,
        articleGoodEl: articleInfo.articleGoodEl,
        articleBadEl: articleInfo.articleBadEl,
        userName:userName
      };
    },
  },
  mounted() {
    this.$bus.$on("sendArticleInfo",(data)=>{
      this.sendArticleInfo(data["article"],data["userName"])
    });
  },
  beforeDestroy() {
    this.$bus.$off("sendArticleInfo");
  },
};
</script>

<style>
</style>