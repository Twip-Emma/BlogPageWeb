<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-04 08:59:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-04 22:15:55
 * @Description: file content
-->
<template>
    <div>
        <h1>文章标题:{{sendArticleInfo.articleTitle}}</h1>
        <h5>文章id:{{sendArticleInfo.articleId}}</h5>
        <h5>用户id:{{sendArticleInfo.userId}}</h5>
        <p>{{sendArticleInfo.articleContext}}</p>
        <h6>喜欢：{{sendArticleInfo.articleGoodEl}}，不喜欢：{{sendArticleInfo.articleBadEl}}</h6>
    </div>
</template>

<script>
export default {
  name: "ArticleInfo",
  props:["sendArticleInfo"],
  data() {
    return {
        articleData:"",
    };
  },
  methods:{

  }
};
</script>

<style>
</style>