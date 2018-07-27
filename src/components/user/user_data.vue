<template>
  <div class="user_main">
    <mt-header fixed :title="title">
      <a @click='back' slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <mt-cell title="姓名" :value="userData.chnName"></mt-cell>
    <mt-cell title="身份证号码" :value="userData.idCard"></mt-cell>
    <mt-cell title="手机号码" :value="userData.mobile"></mt-cell>
  </div>
</template>

<script type="">
export default {
    name: "user_data",
    data() {
        return {
            title: "我的资料",
            userData: {//个人资料
                // agentId: "17",//代理ID
                // authStatus: 0,//实名认证状态 0未认证 1认证中 2已认证 3认证失败
                // autoId: 140325,//??
                // chnName: "小熊",//姓名
                // couponMoney: 0,//???
                // mobile:'15901532857',//手机号
                // idCard:'32072419911213093x',//身份证号
                // nickName:'昵称',//昵称
                // money:'100',//余额
                // freezeMoney:'',//冻结资金
                // integral:'',//积分
                // rechargeMoney:'',//累计充值
                // outMoney:'',//累计提现
                // inviteCode:''//邀请码
            }
        };
    },
    components: {},
    created () {
        this.loading()
    },
    methods: {
        loading() {
            this.$axios.post("/api/user/query_user_info").then(res => {
                if (res.data.errorCode==0) {
                    this.userData=res.data.data
                }
            }).catch(err => {

            });
        }
    }
};
</script>

<style scoped lang="">
</style>
