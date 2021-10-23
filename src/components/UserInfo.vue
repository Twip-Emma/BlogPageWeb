<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-21 08:07:26
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-21 09:27:54
 * @Description: file content
-->
<template>
  <div>
    <button @click="getInfo">点我获取当前你的个人信息</button>
  </div>
</template>

<script>
export default {
    name:"UserInfo",
    data() {
        return {
            
        }
    },
    methods: {
        getInfo(){
            loadXMLDoc()
        }
    },
}

//POST请求
//判断登录状态
function loadXMLDoc() {
  var httpRequest = new XMLHttpRequest();
  let url = "/api/login/isLogin";
  httpRequest.open("POST", url, true);
  httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
  httpRequest.send();

  httpRequest.onreadystatechange = function () {
    let re = httpRequest.responseText;
    if("请先登录"===re){
        console.log(re)
    }else{
        let data = JSON.parse(decodeURIComponent(re))
        console.log(data);
    }

  };
}
</script>

<style>
</style>