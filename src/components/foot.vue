<template>
  <div class="">
    <mt-tabbar v-model="selected">
    <mt-tab-item id="/" @click.native="link('/')">
        <i slot="icon"  class="icon iconfont icon-home"></i>
        首页
    </mt-tab-item>
    <mt-tab-item id="/transact" @click.native="link('/transact')">
       <i slot="icon"  class="icon iconfont icon-shouyexingqing"></i>
        交易
    </mt-tab-item>
    <mt-tab-item id="/info" @click.native="link('/info')">
       <i slot="icon"  class="icon iconfont icon-zixun"></i>
        资讯
    </mt-tab-item>
    <mt-tab-item id="/user" @click.native="link('/user')">
    
       <i slot="icon"  class="icon iconfont icon-wode"></i>
        我
    </mt-tab-item>
    </mt-tabbar>
    
  </div>
</template>

<script type="">

export default {
  name:"foot",
  data() {
    return {
        selected:this.$route.path
    }
  },
  methods: {
    link(router){
        console.log();
       this.$router.push(router)
    }  
  },
  components: {

  },
  watch: {
      '$route' (to, from) {
      // 对路由变化作出响应...
     this.selected =to.path
      
    }
  }
}
</script>

<style scoped lang="">
    .mint-tabbar{
        position: fixed;
    }
    .mint-tab-item-icon .iconfont{
        font-size: 22px;
    }
    .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #fafafa; 
    color: #00baff;
}
</style>
