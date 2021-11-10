<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-17 22:46:46
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-10 20:13:54
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
      <Comment/>
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
import Comment from "./components/article/Comment.vue";

export default {
  name: "App",
  components: {
    Register,
    Login,
    UserInfo,
    Article,
    ArticleInfo,
    Comment
  },
  data() {
    return {
      // articleData: {},
      articleList: []
    };
  },
  methods: {},
  mounted() {
    //#####【区域1】登陆时，将文章列表显示出来
    this.$bus.$on("sendUserAllArticle", (userAllArticleData) => {
      //添加前，清除上一次访问的信息
      if(this.articleList !== []){
        this.articleList = []
      }
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
