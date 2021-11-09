<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-17 22:46:46
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-08 11:32:40
 * @Description: file content
-->
<template>
  <div>
    <div id="app">
      <hr />
      <Login></Login>
      <hr />
      <Register></Register>
      <hr />
      <UserInfo :articleList="articleList"></UserInfo>
      <hr />
      <Article></Article>
      <hr />
      <ArticleInfo />
    </div>
    <!-- <hr> -->
    <!-- <Rotation/> -->
  </div>
</template>

<script>
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import UserInfo from "./components/user/UserInfo.vue";
import Article from "./components/article/Article.vue";
import ArticleInfo from "./components/article/ArticleInfo.vue";

export default {
  name: "App",
  components: {
    Register,
    Login,
    UserInfo,
    Article,
    ArticleInfo,
  },
  data() {
    return {
      // articleData: {},
      articleList: []
    };
  },
  methods: {},
  mounted() {
    this.$bus.$on("sendUserAllArticle", (userAllArticleData) => {
      console.log("opes!");
      console.log(userAllArticleData)
      for (var item in userAllArticleData) {
        this.articleList.push(userAllArticleData[item]);
      }
    });
  },
  beforeDestroy() {
    this.$bus.$off("sendUserAllArticle")
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
