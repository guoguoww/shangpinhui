<template>
  <div class="user_main">
    <mt-header fixed :title="title">
      <a @click='back' slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="main">
        <div id="qrcode" ref="qrcode" style="text-align:center;display: inline-block;"></div>
        <p style="text-align: center; margin-top: 15px; font-size: 14px">推荐ID：{{userData.inviteCode}}</p>
    </div>
    <p style="text-align: center; margin-top: 15px">扫一扫上面的二维码，推荐给好友</p>
  </div>
</template>

<script type="">
import QRCode from 'qrcodejs2'

export default {
  name:"user_extension",
  data() {
    return {
        title:'我的推广',
        userData:{}
    }
  },
  components: {
    QRCode
  },
  mounted () {
      
    this.loading()  

  },
  methods: {
    loading(){
        console.log(this.$router);
        
        this.$axios.post('/api/user/query_user_info').then(res=>{
            if(res.data.errorCode==0){
                this.userData=res.data.data
                console.log(this.userData);
              let qrcode = new QRCode('qrcode', {  
                    width: 125,  // 设置宽度 
                    height: 125, // 设置高度
                    text: window.location.href.split('#')[0]+'/#/register?inviteCode='+this.userData.inviteCode//inviteCode
                })
            //    qrcode.makeCode()
                qrcode() 
                
            }
        }).catch(err=>{

        })
    }
  }
}
</script>

<style scoped lang="">
.main{
    margin-top: 150px;
    text-align: center;
    width: 100%;
}
</style>
