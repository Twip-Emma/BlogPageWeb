<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-21 08:07:26
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-11 08:45:08
 * @Description: file content
-->
<template>
  <div>
    <!-- <button @click="getInfo">点我获取你已发布的文章</button> -->
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
      
      console.log("尝试获取所有评论")
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