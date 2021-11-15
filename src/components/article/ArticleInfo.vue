<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-04 08:59:35
 * @LastEditors: 七画一只妖
<<<<<<< HEAD
 * @LastEditTime: 2021-11-15 20:28:00
=======
 * @LastEditTime: 2021-11-08 11:13:59
 * @Description: file content
-->
<template>
  <div>
    <div v-show="articleData">
      <h1>{{ articleData.articleTitle }}</h1>
      <p>{{ articleData.articleContext }}</p>
      <div>来自用户：{{ articleData.userName }}</div>
      <div class="el">
        <button @click="updateArticleEl(ElData_A)">
          喜欢
        </button>
        <button @click="updateArticleEl(ElData_B)">
          不喜欢
        </button>
      </div>
      <h6>
        喜欢：{{ articleData.articleGoodEl }}，不喜欢：{{
          articleData.articleBadEl
        }}
      </h6>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "ArticleInfo",
  data() {
    return {
      userName: "",
    };
  },
  computed:{
    // 加载文章详细信息
    ElData_A(){
      return {type:'A', articleId:this.articleData.articleId}
    },
    ElData_B(){
      return {type:'B', articleId:this.articleData.articleId}
    },
    articleData(){
      return this.$store.state.articleInfo
    }
  }
  ,
  methods: {

    ...mapActions({updateArticleEl:"updateArticleEl"})
  }
};
</script>

<style>
</style>