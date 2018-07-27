<template>
  <div class="user_main">
    <mt-header fixed :title="title">
        <a @click='back' slot="left">
            <mt-button icon="back"></mt-button>
        </a>
    </mt-header>

        <mt-cell title="姓名" :value="userData.chnName"></mt-cell>
        <mt-cell title="余额" :value="userData.money"></mt-cell>
        <!-- <mt-cell title="银行卡" :value="userData."></mt-cell>
        <mt-cell title="银行卡号" :value="userData."></mt-cell> -->
        <mt-field label="银行卡" placeholder="请选择银行卡" type="text" @click.native="visible=true" v-model="usercardname"></mt-field>
        <mt-field label="短信验证码" placeholder="请输入验证码" type="number"  v-model="drawdata.validCode">
            <button class="forget_yzm"  @click="getCode()" :disabled='disabled' :class="{disabled:disabled}">
                {{isNaN(codetext)?codetext:codetext+'秒'}}
            </button>
        </mt-field>
        <mt-field label="提现金额" placeholder="请输入金额" type="number" v-model="drawdata.money">&nbsp; 元</mt-field>
        <p class="forget">备注：单笔提现收百分之一手续费</p>
        <button class="my_comment" @click="drawmoney">确定</button>
        <mt-popup v-model="visible" position="bottom" style="width:100%;">
            <mt-picker :slots="banks" @change="onValuesChange" value-key='cardinfo'></mt-picker>
        </mt-popup>
  </div>
</template>

<script type="">
import { Toast } from "mint-ui";

export default {
  name:"user_withdraw",
  data() {
    return {
        title:'提现',
        userData: {//个人资料
            // agentId: "17",//代理ID
            // authStatus: 0,//实名认证状态 0未认证 1认证中 2已认证 3认证失败
            // autoId: null,//??
            // chnName: "小熊",//姓名
            // couponMoney: 0,//???
            // mobile:'',//手机号
            // idCard:'',//身份证号
            // nickName:'昵称',//昵称
            // money:'100',//余额
            // freezeMoney:'0',//冻结资金
            // integral:'',//积分
            // rechargeMoney:'',//累计充值
            // outMoney:'',//累计提现
            // inviteCode:''//邀请码
        },
        visible:false,//选择银行显示
        cards:[],//审核过的银行卡列表
        usercardname:'',//显示的银行卡名
        drawdata:{//提现数据
            bankId:'',//银行卡id
            money:'',//提现金额
            validCode:''//验证码
        },
        disabled:false, //验证码按钮状态
        timer:null,//验证码定时器
        codetext:'获取验证码'//验证码文字信息

    }
  },
  components: {

  },
   computed: {
        banks(){//银行列表

            return  [
                {
                    flex: 1,
                    values: this.cards
                }
            ]
        }      
    },
    created () {
      this.loading()
  },
  mounted () {
      for (let i = 0; i < document.querySelectorAll('.mint-field-core').length; i++) {
           document.querySelectorAll('.mint-field-core')[i].style.textAlign='right'
      }
     
  },
  methods: {
      onValuesChange(picker, values){//picker选择改变时
      if(values[0]){
        this.usercardname=values[0].bankName
        this.drawdata.bankId=values[0].id
      }
        
        
          
      },
      loading(){
        this.$axios.post("/api/user/query_user_info").then(res => {//获取用户信息
            if(res.data.errorCode==0){
                this.userData=res.data.data
            }
        }).catch(err => {

        });
        this.$axios({//查询银行卡
              url:'/api/user/query_bank_info',
              method:'post'
            }).then(res=>{
            if(res.data.errorCode==0){
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].status==1) {//如果审核
                        res.data.data[i].cardinfo=res.data.data[i].bankName+res.data.data[i].bankAccount //picker显示信息
                        this.cards.push(res.data.data[i])
                    }
                    
                }
            }else{

            }
          }).catch(err=>{

          })
      },
      getCode(){//获取短信验证码

            this.disabled=true
            this.codetext=60
            this.timer=setInterval(()=>{
                if(this.codetext > 0 && this.codetext <= 60 > 0 && this.codetext <= 60){
                    this.codetext--
                }else{
                    this.disabled=false
                    this.codetext='获取验证码'
                    clearInterval(this.timer)
                    this.timer=null
                }
            },1000)
          this.$axios.get('/api/sms/validate_code/moneyout_'+this.userData.mobile).then(res=>{
              if (res.data.errorCode==0) {
                  Toast('发送成功')
              }else{
                  Toast(res.data.errorMsg)
              }
          }).catch(err=>{

          })
      },
      drawmoney(){//提现
        if (!this.drawdata.bankId) {
            Toast('请选择银行卡')
            return
        }
        console.log(this.drawdata.money);
        if(!this.drawdata.money){
            Toast('请输入提现金额')
            return
        }
        if(!this.drawdata.validCode){
            Toast('请输入验证码')
            return
        }
          this.$axios({
              url:'/api/money/draw_money',
              method:'post',
              params:this.drawdata
          }).then(res=>{
              if(res.data.errorCode==0){
                  Toast('提现成功,请等待银行处理')
              }else{
                  Toast(res.data.errorMsg)
              }
          })
      }
  }
}
</script>

<style scoped lang="">

.forget {
    height: 40px;
    line-height: 40px;
    color: #5d656b;
    padding-left: 3%;
    display: block;
    float: left;
    font-size: 13px;
}
 .my_comment {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
    background: #00baff;
    color: #fff;
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border: none;
}
.mint-cell{
    color: #888;
}
.forget_yzm {
    height: 30px;
    background: #00baff;
    border: none;
    border-radius: 5px;
    padding: 0 5px;
    color: #fff;
    /* position: absolute;
    right: 7%;
    top: 8px; */
    line-height: 30px
}
.disabled{/*获取验证码按钮禁用后颜色*/
    background: #ccc;
}
</style>
