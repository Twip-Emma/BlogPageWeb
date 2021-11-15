<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-25 11:13:11
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-15 20:25:51
 * @Description: file content
-->
<template>
  <div id="article_article-model">
    <form @submit.prevent="createNewArticle(articleInputByUser)" method="POST">
      文章标题<input
        type="text"
        v-model="articleTitle"
      /><br />
      <textarea
        cols="30"
        rows="10"
        v-model.lazy="articleContext"
      ></textarea
      ><br />
      <button type="submit">发布文章</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "Article",
  data() {
    return {
      articleTitle: "",
      articleContext: "",
    };
  },
  computed:{
    articleInputByUser(){
      return {
        articleTitle: this.articleTitle,
        articleContext: this.articleContext,
      }
    }
  },
  methods: {
    ...mapActions({createNewArticle:"createNewArticle"})
  },
};
</script>

<style>
</style>