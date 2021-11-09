<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-25 11:13:11
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-09 15:23:37
 * @Description: file content
-->
<template>
  <div id="article_article-model">
      <form @submit.prevent="getArticleInfo" method="POST">
          文章标题<input type="text" v-model="articleInputByUser.articleTitle"><br>
          <textarea cols="30" rows="10" v-model.lazy="articleInputByUser.articleContext"></textarea><br>
          <button type="submit">发布文章</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Article",
    data() {
        return {
            articleInputByUser:{
                articleTitle:"",
                articleContext:""
            }
        }
    },
    methods:{
        getArticleInfo(){
            console.log(JSON.stringify(this.articleInputByUser))
            // let setData = this.articleInputByUser
            axios.post("/api/article/newArticle",this.articleInputByUser).then(
                response => {
                    console.log(response.data)
                },
                error => {
                    console.log(error.message)
                }
            )
        }
    }
}
</script>

<style>

</style>