<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-10 19:42:03
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-15 20:14:23
 * @Description: file content
-->
<template>
  <div>
    <h2>评论...</h2>
    <div class="all-comment">
      <div v-for="item in AllCommentList" :key="item.commentId">
        <p>{{ item.userName }} 说:</p>
        <p>{{ item.commentContext }}</p>
        <div class="el">
          <button
            @click="updateCommentEl({ type: 'A', commentId: item.commentId })"
          >
            喜欢
          </button>
          <button
            @click="updateCommentEl({ type: 'B', commentId: item.commentId })"
          >
            不喜欢
          </button>
        </div>
        <div class="el">
          喜欢：{{ item.commentGoodEl }} 不喜欢：{{ item.commentBadEl }}
        </div>
        <hr />
      </div>
    </div>
    <div class="new-comment">
      <h2>写一条友善的评论吧~</h2>
      <textarea cols="50" rows="3" v-model.lazy="newComment"></textarea><br />
      <button @click="createNewComment(newCommentData)">发表评论</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Comment",
  data() {
    return {
      newComment: "",
    };
  },
  computed: {
    AllCommentList() {
      return this.$store.state.allcomment;
    },
    newCommentData() {
      return {
        articleId: this.articleInfo.articleId,
        commentContext: this.newComment,
      };
    },
    articleInfo() {
      return this.$store.state.articleInfo;
    }
  },
  methods: {
    ...mapActions({
      updateCommentEl: "updateCommentEl",
      createNewComment: "createNewComment",
    }),
  }
};
</script>

<style scoped>
</style>
