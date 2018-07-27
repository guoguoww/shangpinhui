// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import axios from "./http/index";
import cookie from "../static/js/cookie";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import "../static/css/reset.css";
import "../static/css/iconfont.css";

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.back=function(){//定义全局返回方法
  router.go(-1)
}
Vue.prototype.$axios = axios
Vue.prototype.$cookie = cookie
if (process.env.NODE_ENV == 'production') {//生产环境清除console.log
  console.log = function () {};
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
