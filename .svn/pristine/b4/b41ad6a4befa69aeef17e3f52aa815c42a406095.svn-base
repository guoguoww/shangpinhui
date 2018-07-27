<template>
    <div class="user_main">
        <mt-header fixed :title="title">
            <a @click='back' slot="left">
                <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
<mt-navbar class="page-part" v-model="selected">
  <mt-tab-item id="1">充值明细</mt-tab-item>
  <mt-tab-item id="2">提现明细</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
            <ul class="detailed_list" id="detail">

<!--             
            <ul class="detailed_list" >
                <li>
                    <p width="33%">
                        <span>充值</span>
                        <label>1806295418517414</label>
                    </p>
                    <b width="33%">1655.00</b>
                    <p style="float: right" width="34%">
                        <span style="color:green">
                            处理中
                            
                        </span>
                        <label style="color:black">
                            2018-06-29 15:03:05
                        </label>
                    </p>
                </li>
            </ul>
            <ul class="detailed_list" >
                <li>
                    <p width="33%">
                        <span>充值</span>
                        <label>1806295172017386</label>
                    </p>
                    <b width="33%">5000.00</b>
                    <p style="float: right" width="34%">
                        <span style="color:green">
                            失败
                            
                        </span>
                        <label style="color:black">
                            2018-06-29 14:22:00
                        </label>
                    </p>
                </li>
            </ul>
            <ul class="detailed_list" >
                <li>
                    <p width="33%">
                        <span>充值</span>
                        <label>1806295171217230</label>
                    </p>
                    <b width="33%">10000.00</b>
                    <p style="float: right" width="34%">
                        <span style="color:green">
                            失败
                            
                        </span>
                        <label style="color:black">
                            2018-06-29 14:21:52
                        </label>
                    </p>
                </li>
            </ul>
            <ul class="detailed_list" >
                <li>
                    <p width="33%">
                        <span>充值</span>
                        <label>1806295168817069</label>
                    </p>
                    <b width="33%">500.00</b>
                    <p style="float: right" width="34%">
                        <span style="color:green">
                            失败
                            
                        </span>
                        <label style="color:black">
                            2018-06-29 14:21:28
                        </label>
                    </p>
                </li>
            </ul> -->
            <ul class="detailed_list" v-for="(i,index) in rdetails" :key="index">
                <li>
                    <p width="33%">
                        <span>{{i.type==0?'充值':'提现'}}</span>
                        <label>{{i.serialNo}}</label>
                    </p>
                    <b width="33%">{{i.money}}</b>
                    <p style="float: right" width="34%">
                        <span style="color:green">
                            {{i.status==0?'待支付':i.status==1?'成功':'失败'}}
                            
                        </span>
                        <label style="color:black">
                            {{i.createTime}}
                        </label>
                    </p>
                </li>
            </ul>

        </ul>

  </mt-tab-container-item>
  <mt-tab-container-item id="2">
            <ul class="detailed_list" id="detail">

            <ul class="detailed_list" v-for="(i,index) in ddetails" :key="index">
                <li>
                    <p width="33%">
                        <span>{{i.type==0?'充值':'提现'}}</span>
                        <label>{{i.serialNo}}</label>
                    </p>
                    <b width="33%">{{i.money}}</b>
                    <p style="float: right" width="34%">
                        <span style="color:green">
                            {{i.status==0?'正在提现':i.status==1?'成功':'失败'}}
                            
                        </span>
                        <label style="color:black">
                            {{i.createTime}}
                        </label>
                    </p>
                </li>
            </ul> 

        </ul>

  </mt-tab-container-item>

</mt-tab-container>
    </div>
</template>

<script type="">
import { Toast } from 'mint-ui';

export default {
    name: "recharge_details",
    data() {
        return {
            title: "充值提现明细",
            selected:'1',
            rdetails: [
                //充值明细
            ],
            ddetail:[]//提现明细
        };
    },
    components: {},
    created () {
      this.loading()
    },
    methods: {
        loading() {
            this.$axios({//获取充值明细
              url:'/api/money/money_record',
              method:'post',
              params:{
                  type:0,
                  rows:1000
              }
            }).then(res => {
                    if (res.data.errorCode == 0) {
                        this.rdetails = res.data.data.data;
                    }else{
                        Toast(res.data.errorMsg)
                    }
                }).catch(err => {});
            this.$axios({//获取提现明细
              url:'/api/money/money_record',
              method:'post',
              params:{
                  type:1,
                  rows:1000
              }
            }).then(res => {
                    if (res.data.errorCode == 0) {
                        this.ddetails = res.data.data.data;
                    }else{
                        Toast(res.data.errorMsg)
                    }
                }).catch(err => {});
        }
    }
};
</script>

<style scoped lang="">
.detailed_list {
    width: 100%;
    background: #fff;
}
.detailed_list {
    width: 100%;
    background: #fff;
}
.detailed_list li {
    padding: 8px 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}
.detailed_list li span {
    font-size: 13px;
    display: block;
    padding: 5px 0;
    font-weight: 700;
}
.detailed_list li label {
    display: block;
    font-size: 12px;
    color: #999;
}
.detailed_list li b {
    float: right;
    font-size: 12px;
    display: block;
    height: 50px;
    line-height: 50px;
    font-weight: 400;
}
</style>
