import Vue from 'vue'
import Router from 'vue-router'
import index from "../components/index/index";
const transact = () =>import ('../components/transact/transact')
const tran_details = ()=> import( "../components/transact/tran_details");
const info = ()=> import( "../components/info/info");
const info_details = ()=> import( "../components/info/info_details");
const user = ()=> import( "../components/user/user");
const user_data = ()=> import( "../components/user/user_data");
const user_assets = ()=> import( "../components/user/user_assets");
const user_bankcard = ()=> import( "../components/user/user_bankcard");
const user_recharge = ()=> import( "../components/user/user_recharge");
const user_withdraw = ()=> import( "../components/user/user_withdraw");
const user_changepwd = ()=> import( "../components/user/user_changepwd");
const recharge_details = ()=> import( "../components/user/recharge_details");
const add_bankcard = ()=> import( "../components/user/add_bankcard");
const user_realname = ()=> import( "../components/user/user_realname");
const user_extension = ()=> import( "../components/user/user_extension");
const login = ()=> import( "../components/login/login");
const register = ()=> import( "../components/login/register");
const forget = ()=> import( "../components/login/forget");

import cookie from "../../static/js/cookie";



Vue.use(Router)
/**
 * mata.shownav 是否显示底栏
 * meta.auth 是否需要登录验证
 * meta.index 根据索引判断前进还是后退
 */
let routes = [{
    path: '/',
    component: resolve => require(['../components/index/index'], resolve),
    name: 'index',
    meta: {
      shownav: true,
      auth: true,
      index: 0
    }
  },
  {
    path: '/transact',
    component: transact,
    name: 'transact',
    meta: {
      shownav: true,
      auth: true,
      index:0
    }
  },
  {
    path: '/tran_details',
    component: tran_details,
    name: 'tran_details',
    meta: {
      shownav: false,
      auth: true,
      index:1
    }
  },
  {
    path: '/info',
    component: info,
    name: 'info',
    meta: {
      shownav: true,
      auth: true,
      index:0
    }
  },
  {
    path: '/info_details',
    component: info_details,
    name: 'info_details',
    meta: {
      shownav: false,
      auth: true,
      index:1
    }
  },
  {
    path: '/user',
    component: user,
    name: 'user',
    meta: {
      shownav: true,
      auth: true,
      index:0
    }
  },
  {
    path: '/user_data',
    component: user_data,
    name: 'user_data',
    meta: {
      shownav: false,
      auth: true,
      index:1
    }
  },
  {
    path: '/user_assets',
    component: user_assets,
    name: 'user_assets',
    meta: {
      shownav: false,
      auth: true,
      index: 1
    }
  },
  {
    path: '/user_bankcard',
    component: user_bankcard,
    name: 'user_bankcard',
    meta: {
      shownav: false,
      auth: true,
      index: 1
    }
  },
  {
    path: '/user_recharge',
    component: user_recharge,
    name: 'user_recharge',
    meta: {
      shownav: false,
      auth: true,
      index: 1
    }
  },
  {
    path: '/user_withdraw',
    component: user_withdraw,
    name: 'user_withdraw',
    meta: {
      shownav: false,
      auth: true,
      index:1
    }
  },
  {
    path: '/user_changepwd',
    component: user_changepwd,
    name: 'user_changepwd',
    meta: {
      shownav: false,
      auth: true,
      index:1
    }
  },
  {
    path: '/recharge_details',
    component: recharge_details,
    name: 'recharge_details',
    meta: {
      shownav: false,
      auth: true,
      index:2
    }
  },
  {
    path: '/add_bankcard',
    component: add_bankcard,
    name: 'add_bankcard',
    meta: {
      shownav: false,
      auth: true,
      index:2
    }
  },
  {
    path: '/user_realname',
    component: user_realname,
    name: 'user_realname',
    meta: {
      shownav: false,
      auth: true,
      index:1
    }
  }, 
  {
    path: '/user_extension',
    component: user_extension,
    name: 'user_extension',
    meta: {
      shownav: false,
      auth: true,
      index:1
    }
  },
  {
    path: '/login',
    component: login,
    name: 'login',
    meta: {
      shownav: false,
      auth: false,
      index:0
    }
  },
  {
    path: '/register',
    component: register,
    name: 'register',
    meta: {
      shownav: false,
      auth: false,
      index:1
    }
  },
  {
    path: '/forget',
    component: forget,
    name: 'forget',
    meta: {
      shownav: false,
      auth: false,
      index:1
    }
  }

]
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  var userInfo = cookie.get('_auth') //router.app.$cookie.get('_auth') //JSON.parse(localStorage.getItem('userInfoStorage'));


  if (to.meta.auth) { //判断需不需要登录验证
    if (userInfo) { //有没有用户信息
      next()
    } else { //没有跳到登录页
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else if (to.name === 'login') { //判断进入的地址是不是登录页
    if (userInfo) { //有没有用户信息 有就返回首页 没有就进
      next('/')
    } else {
      next()
    }
  } else {

    next()
  }

})

export default router
