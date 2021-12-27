<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-25 14:52:24
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-25 14:52:24
 * @Description: file content
-->
<template>
  <div>
    <hr />
    <form enctype="multipart/form-data" method="post" action="/upload">
      <input type="text" name="imgName" />
      <input type="file" name="imgFile" />
      <input type="submit" value="上传" />
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {};
</script>

<style>
</style>