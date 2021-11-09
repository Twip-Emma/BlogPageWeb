<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-21 08:07:26
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-09 14:02:28
 * @Description: file content
-->
<template>
  <div>
    <button @click="getInfo">点我获取你已发布的文章</button>
    <div>
      <div class="articleItem"
        v-for="item in articleList"
        :key="item.articleId"
        @click="getComment(item.articleId,item.articleTitle,item)"
      >
        {{ item.articleTitle }}
      </div>
      <div id="articleInfo"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
let vm = {
  name: "UserInfo",
  props:["articleList"],
  data() {
    return {
      // articleList: [],
    };
  },
  methods: {
    //获取所有该用户已发布文章列表
    getInfo() {
      axios.post("/api/article/getUserAllArticle").then(
        response => {
          this.$bus.$emit("sendUserAllArticle",response.data)
          console.log(response.data)
        },
        error => {
          console.log(error.message)
        }
      )
    },
    //获取被点击的这篇文章的详细信息并显示到另一个区域
		getComment(article){
      this.$bus.$emit("sendArticleInfo",article)
		},
    mounted() {

    },
  },
};

export default vm;
</script>

<style scoped>
.articleItem:hover {
  background: #ddd;
}
</style>