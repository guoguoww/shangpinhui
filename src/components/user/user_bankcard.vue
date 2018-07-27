<template>
  <div class="user_main">
    <mt-header fixed :title="title">
        <a @click='back' slot="left">
            <mt-button icon="back"></mt-button>
        </a>
    </mt-header>

    <!-- <div class="exp_box" id="allCash" style="display: block;">
        <div alt="normal" class="exp_css exp_a">
            <div class="exp_bottom">
                <span>
                    <label>中国建设银行</label>
                    <label style=" margin-left: 100px">已审核</label>
                </span>
            </div>

            <div class="exp_bottom">
                <span>
                    <span>5454154</span>
                    <button class="quit_button" style="margin-bottom: 5px; margin-top: 10px; margin-right: 0px" >
                        解绑
                    </button>
                </span>
            </div>
        </div>
    </div> -->

    <div class="exp_box" id="allCash" style="display: block;" v-for="(i,index) in cards" :key="index">
        <div alt="normal" class="exp_css exp_a">
            <div class="exp_bottom">
                <span>
                    <label>{{i.bankName}}</label>
                    <label style=" margin-left: 100px">{{i.status==0?'审核中':i.status==1?'审核通过':'审核失败'}}</label>
                </span>
            </div>

            <div class="exp_bottom">
                <span>
                    <span>{{i.bankAccount}}</span>
                    <button class="quit_button" style="margin-bottom: 5px; margin-top: 10px; margin-right: 0px" @click="untie(i.id)">
                        解绑
                    </button>
                </span>
            </div>
        </div>
    </div>


    <div class="div_button">
            <button class="quit" id="bindBank_id" @click="addbankcard">
                添加银行卡
            </button>
        </div>
  </div>
</template>

<script type="">
import { Toast,MessageBox } from 'mint-ui';

export default {
  name:"user_bankcard",
  data() {
    return {
        title:'我的银行卡',
        cards:[
            //  {            "bankAccount": "6215206488888888888",             "bankName": "中国银行",             "chnName": "小熊",             "idCard": "371515199909090134",             "openBankName": "中国银行济南支行",             "phone": "18888888888",             "status": 2,             "userId": "112222"        }
        ]//银行卡列表
    }
  },
  components: {

  },
  created () {
    this.loading()  
  },
  methods: {
      addbankcard(){//添加银行卡
          this.$router.push('/add_bankcard')
      },
      loading(){//页面加载
          this.$axios({
              url:'/api/user/query_bank_info',
              method:'post'
            }).then(res=>{
            if(res.data.errorCode==0){
                this.cards=res.data.data
            }else{

            }
          }).catch(err=>{

          })
      },
      untie(id){//解绑
          MessageBox.confirm('确定执行此操作?').then(action => {
              this.$axios({
                url:'/api/user/remove_bank',
                method:'post',
                params:{
                    id
                }
            }).then(res=>{

                if(res.data.errorCode==0){
                    Toast('解绑成功')
                    this.loading()
                }else{
                    Toast(res.data.errorMsg)
                }
            }).catch(err=>{
                
            })
 
        });
      
        
    }
  }
}
</script>

<style scoped lang="">
.exp_css {
    width: 96%;
    margin: 15px auto;
    -webkit-box-shadow: 3px 3px 3px #ccc;
    box-shadow: 3px 3px 3px #ccc;
    border-radius: 5px;
    background: #fff;
    position: relative;
}
.exp_css .exp_bottom {
    padding: 8px 5%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #999;
    padding-bottom: 5px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.quit_button {
    width: 40%;
    height: 25px;
    display: inline;
    font-size: 13px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background: #00baff;
}
 .quit {
    width: 92%;
    height: 40px;
    display: block;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background: #00baff;
    margin: 0 auto;
}
</style>
