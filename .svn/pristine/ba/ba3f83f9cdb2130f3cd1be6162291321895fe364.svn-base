<template>
  <div id="app">
    <transition :name="transitionName">   
        <router-view/>
    </transition>
      <foot v-show="$route.meta.shownav"></foot>
  </div>
</template>

<script>
import foot from "./components/foot";
export default {
  name: 'App',
  components: {
    foot
  },
   data(){
      return {
          transitionName:''
      }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index==0&&from.meta.index==0){
        this.transitionName = '';
        return
      }
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else if(to.meta.index < from.meta.index){
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style>
.mint-header{/*标题*/
    background-color: #ffffff;
    color: #555;
}
.mint-header-title{
  font-size: 16px;
}
.user_main{
    padding-top: 45px;
}
.recharge_details .mint-cell-text {/*我的资产*/
    vertical-align: middle;
    display: inline-block;
    height: 2rem;
    font-size: 1.3rem;
}
/*路由切换动画*/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
position: absolute;
  width:100%;
  transition: all .4s cubic-bezier(.55,0,.1,1);

}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
