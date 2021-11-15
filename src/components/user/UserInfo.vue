<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-21 08:07:26
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-15 14:59:16
 * @Description: file content
-->
<template>
  <div>
    <h1>个人主页</h1>
    <div>
      <div
        class="articleItem"
        v-for="item in articleList"
        :key="item.articleId"
        @click="getComment(item)"
      >
        {{ item.articleTitle }}
      </div>
      <div id="articleInfo"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let vm = {
  name: "UserInfo",
  props: ["articleList"],
  data() {
    return {};
  },
  methods: {
    //获取被点击的这篇文章的详细信息并显示到另一个区域
    getComment(article) {
      axios
        .post("/api/tool/findUserName", {
          userId: article.userId,
        })
        .then(
          (response) => {
            console.log(response.data);
            this.$bus.$emit("sendArticleInfo", {
              article: article,
              userName: response.data,
            });
          },
          (error) => {
            console.log(error.message);
          }
        );
      axios.post("/api/article/getAllComment",article.articleId).then(
        (response) => {
          console.log("请求所有评论成功：" + JSON.stringify(response.data));
          this.$bus.$emit("sendAllComment",{
            data:response.data,
            articleId:article.articleId
          })
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    mounted() {},
  },
};

export default vm;
</script>

<style scoped>
.articleItem:hover {
  background: #ddd;
}
</style>