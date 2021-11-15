<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-10 19:42:03
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-15 14:55:47
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
          <button @click="updateCommentEl('A', item.commentId)">喜欢</button>
          <button @click="updateCommentEl('B', item.commentId)">不喜欢</button>
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
      <button @click="createNewComment">发表评论</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Comment",
  data() {
    return {
      commentSender:"",
      articleId: "",
      AllCommentList: [],
      newComment: "",
    };
  },
  methods: {
    //评论点赞点踩的处理
    updateCommentEl(type, commentId) {
      axios
        .post("/api/article/commentElChange", {
          type: type,
          commentId: commentId,
        })
        .then(
          (req) => {
            if (req.data === "操作失败") {
              alert("你不能重复对一个评论进行评价！！");
            } else {
              this.newComments();
            }
          },
          (error) => {
            console.log(error.message);
          }
        );
    },
    //你写了新评论
    createNewComment() {
      axios
        .post("/api/article/newComment", {
          articleId: this.articleId,
          commentContext: this.newComment,
        })
        .then(
          () => {
            this.newComments();
          },
          (error) => {
            console.log(error.message);
          }
        );
    },
    //发送一个新评论之后再次请求该文章全部评论
    newComments() {
      axios.post("/api/article/getAllComment", this.articleId).then(
        (response) => {
          console.log("请求所有评论成功：" + JSON.stringify(response.data));
          this.$bus.$emit("sendAllComment", {
            data: response.data,
            articleId: this.articleId,
          });
        },
        (error) => {
          console.log(error.message);
        }
      );
    },

  },
  mounted() {
    this.$bus.$on("sendAllComment", (data) => {
      this.AllCommentList = data["data"];
      this.articleId = data["articleId"];
      this.commentSender = data["userName"]
      console.log("载入数据成功");
    });
  },
  beforeDestroy() {
    this.$bus.$off("sendAllComment");
  },
};
</script>

<style scoped>
</style>
