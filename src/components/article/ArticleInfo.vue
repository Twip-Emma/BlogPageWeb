<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-04 08:59:35
 * @LastEditors: 七画一只妖
<<<<<<< HEAD
 * @LastEditTime: 2021-11-15 14:33:18
=======
 * @LastEditTime: 2021-11-08 11:13:59
 * @Description: file content
-->
<template>
  <div>
    <div v-show="articleData">
      <h1>{{ articleData.articleTitle }}</h1>
      <!-- <h5>文章id:{{ articleData.articleId }}</h5>
      <h5>用户id:{{ articleData.userId }}</h5> -->
      <p>{{ articleData.articleContext }}</p>
      <div>来自用户：{{ articleData.userName }}</div>
      <div class="el">
        <button @click="updateArticleEl('A', articleData.articleId)">
          喜欢
        </button>
        <button @click="updateArticleEl('B', articleData.articleId)">
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
import axios from "axios";
export default {
  name: "ArticleInfo",
  props: [""],
  data() {
    return {
      articleData: "",
      userName: "",
    };
  },
  methods: {
    //加载文章基本信息
    sendArticleInfo(articleInfo, userName) {
      this.articleData = {
        articleId: articleInfo.articleId,
        userId: articleInfo.userId,
        articleTitle: articleInfo.articleTitle,
        articleContext: articleInfo.articleContext,
        articleGoodEl: articleInfo.articleGoodEl,
        articleBadEl: articleInfo.articleBadEl,
        userName: userName,
      };
    },
    //点赞&点踩
    updateArticleEl(type, articleId) {
      axios
        .post("/api/article/articleElChange", {
          type: type,
          articleId: articleId,
        })
        .then(
          (response) => {
            if (response.data === "操作失败") {
              alert("你不能对本篇文章重复评价！！");
            } else {
              if (type === "A") {
                this.articleData.articleGoodEl =
                  Number(this.articleData.articleGoodEl) + 1;
              } else {
                this.articleData.articleBadEl =
                  Number(this.articleData.articleBadEl) + 1;
              }
            }
          },
          (error) => {
            console.log(error.message);
          }
        );
    },
  },
  mounted() {
    this.$bus.$on("sendArticleInfo", (data) => {
      this.sendArticleInfo(data["article"], data["userName"]);
    });
  },
  beforeDestroy() {
    this.$bus.$off("sendArticleInfo");
  },
};
</script>

<style>
</style>