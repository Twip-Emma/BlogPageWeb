<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-10 19:42:03
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-10 20:29:28
 * @Description: file content
-->
<template>
  <div>
      <div class="all-comment">
          <div v-for="item in AllCommentList" :key="item.commentId">
              <p>{{item.commentContext}}</p>
              <div class="el">喜欢：{{item.commentGoodEl}}  不喜欢：{{item.commentBadEl}}</div>
          </div>
      </div>
      <div class="new-comment">

      </div>
  </div>
</template>

<script>
export default {
    name:"Comment",
    data() {
        return {
            AllCommentList:[]
        }
    },
    mounted(){
        this.$bus.$on("sendAllComment",(data)=>{
            this.AllCommentList = data
            console.log("载入数据成功")
        })
    },
    beforeDestroy(){
        this.$bus.$off("sendAllComment")
    }
}
</script>

<style>

</style>
