<template>
  <div class="user_main">
    <mt-header fixed :title="title">
        <a @click='back' slot="left">
            <mt-button icon="back"></mt-button>
        </a>
    </mt-header>
<ul class="infor_list sec_number">
            <li>
                <input placeholder="请输入旧密码" type="password" v-model='userData.oldPassword'>
            </li>
            <li>
                <input placeholder="请输入新密码" type="password" v-model='userData.newPassword'>
            </li>
            <li>
                <input placeholder="请确认新密码" type="password" v-model='repwd'>
            </li>
            <!-- <li class="forget_txt">
                <input id="yzm" placeholder="请输入验证码" type="text" v-model='userData.'>
                <button class="forget_yzm" >获取验证码</button>
            </li> -->

            <li style="margin-top: 15px">
                <button class="confirm" @click='changepwd()'>确认</button>
            </li>
        </ul>
  </div>
</template>

<script type="">
import { Toast } from 'mint-ui';

export default {
  name:"user_changepwd",
  data() {
    return {
        title:'修改密码',
        userData:{
            newPassword:'',//新密码
            oldPassword:''//旧密码
        },
        repwd:''//确认密码
    }
  },
  components: {

  },
  methods:{
      changepwd(){//修改密码
        if(!this.userData.oldPassword){
          Toast('请输入原密码')
          return
      }
      if(!this.userData.newPassword){
          Toast('请输入新密码')
          return
      }
      if(this.repwd!=this.userData.newPassword){
        Toast('两次输入密码不一致')
        console.log(this.repwd,this.userData.newPassword)
          return 
      }
            this.$axios({
                url:'/api/user/update_password',
                method:'post',
                params:this.userData
            }).then(res=>{
                if(res.data.errorCode==0){
                    Toast('修改成功')
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
.sec_number {
    border-top: 1px solid #eee;
    margin-top: 8px;
    padding-top: 15px;
}
.infor_list {
    margin-bottom: 8px;
    background: #fff;
    display: block;
}
.sec_number li {
    height: 58px;
    border-bottom: none;
}

.infor_list li {
    padding: 0 2%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    /* border-bottom: 1px solid #eee; */
    display: block;
}
.sec_number li input {
    width: 96%;
    margin: 0 auto;
    display: block;
    height: 46px;
    padding: 0 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
}

.infor_list li input {
    border: 1px solid #eee!important;
    border-radius: 6px;
}
.forget_txt {
    position: relative;
}
.forget_yzm {
    height: 30px;
    background: #00baff;
    border: none;
    border-radius: 5px;
    padding: 0 5px;
    color: #fff;
    position: absolute;
    right: 7%;
    top: 8px;
    line-height: 30px;
}
.sec_number li .confirm {
    width: 96%;
    margin: 0 auto;
    display: block;
    height: 46px;
    border-radius: 4px;
    background: #00baff;
    color: #fff;
    font-size: 14px;
    border: none;
}
</style>
