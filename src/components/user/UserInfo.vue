<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-21 08:07:26
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-15 20:30:03
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
        @click="getArticleInfoAndComment(item)"
      >
        {{ item.articleTitle }}
      </div>
      <div id="articleInfo"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserInfo",
  data() {
    return {};
  },
  computed: {
    articleList() {
      return this.$store.state.articleList;
    },
  },
  methods: {
    ...mapActions({ getArticleInfoAndComment: "getArticleInfoAndComment" }),
  },
};
</script>

<style scoped>
.articleItem:hover {
  background: #ddd;
}
</style>