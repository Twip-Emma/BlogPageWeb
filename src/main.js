/*
 * @Author: 七画一只妖
 * @Date: 2021-10-17 22:46:46
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-15 18:28:19
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import store from "./store"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store:store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
