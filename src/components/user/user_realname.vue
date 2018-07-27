<template>
  <div class="user_main">
    <mt-header fixed :title="title">
        <a @click='back' slot="left">
            <mt-button icon="back"></mt-button>
        </a>
    </mt-header>

    <mt-field  placeholder="请输入姓名" v-model="userData.chnName"></mt-field>
    <mt-field  placeholder="请输入身份证号" v-model="userData.idCard"></mt-field>
    <mt-button size="large" type="primary" @click="authentication">立即认证</mt-button>

  </div>
</template>

<script type="">
import { Toast } from 'mint-ui';

export default {
  name:"user_realname",
  data() {
    return {
        title:'实名认证',
        userData:{
            chnName:'',//姓名
            idCard:'',//身份证
            // mobile:''//手机
        }
    }
  },
  components: {

  },
    methods: {
        authentication(){//认证
         
            this.$axios({
                url:'/api/user/certification',
                method:'post',
                params:this.userData
            }).then(res=>{
                if (res.data.errorCode==0) {
                    Toast('认证成功!请等待审核')
                   this.$router.push('/user')
                }else{
                    Toast(res.data.errorMsg)
                }
            }).catch(err=>{

            })
        }
    }
}
</script>

<style scoped lang="">
.mint-button--large{
    margin: 0 auto;
    margin-top: 1.3rem;
    width: 94%;

}
.mint-field-core{
    text-align: left;
    color: #999;

}
</style>
