<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-04 08:59:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-08 11:13:59
 * @Description: file content
-->
<template>
  <div>
    <h1>文章标题:{{ articleData.articleTitle }}</h1>
    <h5>文章id:{{ articleData.articleId }}</h5>
    <h5>用户id:{{ articleData.userId }}</h5>
    <p>{{ articleData.articleContext }}</p>
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
    };
  },
  methods: {
    sendArticleInfo(articleInfo) {
      this.articleData = {
        articleId: articleInfo.articleId,
        userId: articleInfo.userId,
        articleTitle: articleInfo.articleTitle,
        articleContext: articleInfo.articleContext,
        articleGoodEl: articleInfo.articleGoodEl,
        articleBadEl: articleInfo.articleBadEl,
      };
    },
  },
  mounted() {
    this.$bus.$on("sendArticleInfo", this.sendArticleInfo);
  },
  beforeDestroy() {
    this.$bus.$off("sendArticleInfo");
  },
};
</script>

<style>
</style>