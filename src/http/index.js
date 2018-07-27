import axios from "axios";
import cookie from "../../static/js/cookie";
import { Indicator,Toast  } from 'mint-ui';//引入提示loading动画
import router from "../router/index";


var instance = axios.create({//axios实例配置   自定义的axios实例
  baseURL: process.env.BASEURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
  // http request 拦截器
  instance.interceptors.request.use(
    config => {
      if (config.url.indexOf('latest_market') == -1 && config.url.indexOf('times') == -1) { //判断是否为请求行情的接口 如果不是加载动画
          Indicator.open({ //加载动画
            spinnerType: 'triple-bounce'
          });
      }

      let token = encodeURIComponent(cookie.get('_auth'));
      if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers._auth = token;
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    });
  // http response 拦截器
  instance.interceptors.response.use(
    response => {
      Indicator.close();//关闭加载动画
      if (response.data.errorCode==-1){
        Toast('会话失效或者已在其他设备登录')
        cookie.clear()
        router.push('login')
      }
      return response;
    },
    error => {
      console.log(error.response ,)
      Indicator.close(); //关闭加载动画
      Toast({
        message: '请求错误',
        position: 'bottom'
      });
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // 401 清除token信息并跳转到登录页面
            Toast('会话失效或者已在其他设备登录')
            cookie.clear()
            router.push('login')
        }
      }
      // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
      return Promise.reject(error.response.data) // 返回接口返回的错误信息
    });

export default instance
