<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 18:39:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-18 19:02:26
 * @Description: file content
-->
<template>
  <div id="topBanner" style="padding-top: 5px" class="slide">
    <div
      v-for="(imgUrl, index) in bannerList"
      v-show="index === mark"
      :key="index"
      class="slideshow"
    >
      <a href="#">
        <img :src="imgUrl" style="width: 100%; height: 350px" />
      </a>
    </div>
    <div class="bar">
      <span
        v-for="(item, index) in bannerList"
        :class="{ active: index === mark }"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mark: 0, //比对图片索引的变量
      bannerList: [
        "http://m.qpic.cn/psc?/V11yYd861L3wXM/LjNfElrpEt6hXz54k3bCMRg01SgwMDjfQBvOxig3DLE2M6byw2UqhANNLJvGotoIlY*jQ5Ab9BDklOvwrcTiZW7TpRAq5uD79hn7kwEjEO4!/b&bo=sATuArAE7gIRKR4!&rf=viewer_4",
        "http://m.qpic.cn/psc?/V11yYd861L3wXM/LjNfElrpEt6hXz54k3bCMRGQP8WfyO8gsqYYaYNmmbRoJdPCmIzlS*RBGk2ZAU5RgTTATztytxTusupFKjdSuCSxsMMIe.hZ2OLYoGXoB7Y!/b&bo=sATuArAE7gIRKR4!&rf=viewer_4",
        "http://m.qpic.cn/psc?/V11yYd861L3wXM/LjNfElrpEt6hXz54k3bCMQ*HySlmHMP3zNELWzTb5pzR3B*1Rgs0sg0SGTllTwGuAAYtWCw1UhnSdmkf2Kya*ZhP7dfsyluLCQT353weU4Y!/b&bo=gAc4BIAHOAQROQ4!&rf=viewer_4",
      ],
    };
  },
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === 3) {
        //当遍历到最后一张图片置零
        this.mark = 0;
      }
    },
    play() {
      setInterval(this.autoPlay, 2500);
    },
    change(i) {
      this.mark = i;
    },
  },
  created() {
    this.play();
  },
};
</script> 

<style>
.slide {
  width: 950px;
  height: 150px;
  margin: 0 auto;
  margin-top: 50px;
  overflow: hidden;
  position: relative;
}
.slideshow {
  width: 95px;
  height: 150px;
}
li {
  position: absolute;
}
img {
  width: 95px;
  height: 150px;
}
.bar {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.bar span {
  width: 20px;
  height: 5px;
  border: 1px solid;
  background: white;
  display: inline-block;
  margin-right: 10px;
}
.active {
  background: #bfd6b6 !important;
}
</style>  