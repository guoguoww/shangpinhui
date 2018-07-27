<template>
    <div class="">
        <ul class="a_tranmenu">
            <li>
                <a>总资产：
                    <b>{{userData.money}}</b>元</a>
            </li>
            <li>
                <a>可用：
                    <b>{{userData.money-userData.freezeMoney}}</b>元</a>
            </li>
        </ul>
        <mt-navbar v-model="selected">
            <mt-tab-item :id="index" v-for="(i,index) in products" :key="index">{{i.name}}</mt-tab-item>
            <!-- <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item> -->
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="selected">
                <div class="i_datacontent swiper-wrapper">

                    <div class="i_datacontent i_rise">
                        <div class="i_left"  :style="{'color':downcolor}">
                            <span>{{details.price}}
                                <i class="iconfont i_fh" v-if="down==false"></i>
                                <i class="iconfont i_fh" v-else-if="down"></i>
                                <!-- <i class="iconfont i_fh" v-else>--</i> -->
                            </span>
                            <div class="new_ahei">
                                <label>{{details.diff}}</label>&nbsp;&nbsp;
                                <label>{{(details.diffRate*100).toFixed(2)}}%</label>
                            </div>
                            <div>
                                <label id="isClose" style="color:#999999"></label>
                            </div>
                        </div>
                        <div class="i_right">
                            <p>
                                <span>最高：
                                    <label>{{details.high}}</label>
                                </span>
                                <span>今开：
                                    <label>{{details.open}}</label>
                                </span>
                            </p>
                            <p>
                                <span>最低：
                                    <label>{{details.low}}</label>
                                </span>
                                <span>昨收：
                                    <label>{{details.close}}</label>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="tran_box">
                    <div class="tran_span_box">
                        <span style="margin-left: 15px" :class="{'select_bar':kTitleselected==i.value}" v-for="(i,index) in kTitle" :key="index" @click="kTitleselected=i.value">
                            {{i.title}}
                        </span>
                        <!-- <span style="margin-left: 15px" >
                            30 m
                        </span>
                        <span style="margin-left: 15px" >
                            60 m
                        </span>
                        <span style="margin-left: 15px" >
                            日
                        </span> -->

                    </div>
                    <!-- <div class="myechart" _echarts_instance_="ec_1530493988951" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                        <div style="position: relative; overflow: hidden; width: 375px; height: 260px; padding: 0px; margin: 0px; border-width: 0px;">
                            <canvas data-zr-dom-id="zr_0" width="750" height="520" style="position: absolute; left: 0px; top: 0px; width: 375px; height: 260px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                        </div>
                    </div> -->
                    <echarts :interval='kTitleselected' :code='product_item.code'></echarts>
                </div>
                <div style="background-color: white">
                    <h6 style="font-size: 14px;margin-top: 0px;margin-bottom: 3px;padding-top:15px;color: #333333; text-align: center">
                        请选择交易时间</h6>
                    <div class="principal-list" style=" padding-left: 10px;padding-bottom: 1px;padding-top: 10px;">

                        <!-- <span class="principal-item principal-disabled">
                            上午盘(9-11:30)
                        </span>
                        <span class="principal-item principal-active">
                            下午盘(13:30-15)
                        </span> -->
                        <span class="principal-item" v-for="(i,index) in times" :key="index" @click="selectedtime(i)" :class="{'principal-active':orderlist.buyTimeId==i.id,'principal-disabled':i.timeout}" >
                            {{i.name}}
                        </span>
                        <!-- <span class="principal-item">
                            晚盘(10-11)
                        </span>
                        <span class="principal-item">
                            晚盘(11点-0点)
                        </span>
                        <span class="principal-item">
                            晚盘(0点-1点)
                        </span>
                        <span class="principal-item">
                            晚盘(1点-2:30)
                        </span>
                        <span class="principal-item">
                            次日上午盘
                        </span> -->
                    </div>
                </div>
                <div class="buy_cz_box buy_font_color">

                    <div class="buy_one">
                        <div class="buy_one">
                            <span class="productName">
                                <label>

                                    <b>最新价：{{details.price}}{{product_item.unit=='b'?'元/桶':'点'}}</b>
                                </label>
                                <label>

                                    <b>冻结权利金：{{frozenmoney}}</b>
                                </label>
                            </span>
                            <input type="hidden" value="2">
                        </div>
                    </div>

                    <div class="div_money">
                        <div class="flex-container">
                            <div class="flex-item_two">
                                备注：{{product_item.remark}}
                            </div>
                        </div>
                    </div>

                    <div class="orderNum border_buttom">
                        <div class="flex-container" style="padding-top: 5px;">
                            <div class="flex-item_one">
                                <label class="label_title">入市手数</label>
                            </div>
                            <div class="flex-item_three">
                                <button class="sum_button sum_button_left" type="button" @click="change(0)">
                                    －
                                </button>
                                <input class="input_sum " min="1" type="number" v-model="orderlist.entriesHands">
                                <button class="sum_button sum_button_right" type="button" @click="change(1)">
                                    ＋
                                </button>
                            </div>
                        </div>

                        <div class="principal-list" style=" padding-left: 10px;padding-bottom: 1px;padding-top: 20px;">
                            <span style="width: 31%" class="principal-item" @click="orderlist.entriesHands=i" v-for="(i,index) in hands" :key="index" :class="{'principal-active':orderlist.entriesHands===i}">
                                {{i}} 手
                            </span>
                            <!-- <span style="width: 31%" class="principal-item" @click="orderlist.entriesHands=='1000'">
                                100 手
                            </span>
                            <span style="width: 31%" class="principal-item" @click="orderlist.entriesHands=='1000'">
                                10 手
                            </span> -->
                        </div>

                    </div>
                </div>

                <div class="tran_quota tran_btn">

                    <a @click="order(0)">买涨</a>
                    <a @click="order(1)">买跌</a>

                </div>
                <div class="buy_explain" style="font-size: 9px;">
                    <span>温馨提示：(入市有风险，操盘须谨慎)</span>
                </div>
                <ul class="tran_msg">

                    <li>
                        <router-link to="/tran_details">
                            <label>持仓盈亏</label>
                            <i class="iconfont"></i>
                            <span>交易明细</span>
                        </router-link>
                    </li>

                </ul>
            </mt-tab-container-item>
            <!-- <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
            </mt-tab-container-item> -->
        </mt-tab-container>

    </div>
</template>

<script type="">
import echarts from "../echarts/echarts";
import { Toast } from 'mint-ui';

export default {
    name: "transact",
    data() {
        return {
            selected: 0, //navbar默认选择
            hands:['10','100','1000'],//可选择的手数
            kTitleselected:'1',//k线选中
            kTitle:[//k线标题栏
                {title:'分时线',value:1},
                {title:'30m',value:30},
                {title:'60m',value:'1h'},
                {title:'日',value:'1d'},

            ],
            products: [
                //产品列表
                // {
                //     code: "NFIC1809", //产品编号
                //     entriesMaxHands: "1000", //入市最大手
                //     entriesMinHands: "10", //入市最小手
                //     exemptClosed: "0",
                //     fees: "10.000000",
                //     name: "中证IC1809",
                //     precision: 3,//数据精度
                //     status: "0",
                //     unit: "p",
                //     remark: "1手原油为10桶原油报价" //备注
                // },
                // {
                //     code: "IF1807", //产品编号
                //     entriesMaxHands: "1000", //入市最大手
                //     entriesMinHands: "10", //入市最小手
                //     exemptClosed: "0",
                //     fees: "10.000000",
                //     name: "沪深IF1807",
                //     precision: 3,
                //     status: "0",
                //     unit: "p",
                //     remark: "备注" //备注
                // },
                //  {
                //     code: "IC1807", //产品编号
                //     entriesMaxHands: "1000", //入市最大手
                //     entriesMinHands: "10", //入市最小手
                //     exemptClosed: "0",
                //     fees: "10.000000",
                //     name: "中证IC1807",
                //     precision: 3,
                //     status: "0",
                //     unit: "p",
                //     remark: "备注" //备注
                // }
            ],
            product_item: {
                //单个产品 当前显示的产品
                // code: "NFIC1809", //产品编号
                // entriesMaxHands: "1000", //入市最大手
                // entriesMinHands: "10", //入市最小手
                // exemptClosed: "0",
                // fees: "10.000000",
                // name: "中证IC1809",
                // precision: 3,
                // status: "0",
                // unit: "p",
                // remark: "1手原油为10桶原油报价" //备注
            },
            times: [
                //下单时间按钮
                // {
                //     id: 1,
                //     code: "SF12001",
                //     begin: "9:00",
                //     end: "11:30",
                //     deleteTime: "",
                //     name: "上午盘(9:00-11:30)",
                //     nextFlag: 0
                // }
            ],
            time:{},//当前选择的下单时间
            details:{},//详情
            userData:{},//用户资料
            orderlist: {
                //下单列表
                buyUpDown: "", //买涨买跌  0 涨 ,1 跌
                entriesHands: 10, //手数
                buyTimeId: "", //下单交易时间id
                code: "" //产品编号
            },
            detailstimer:null,//获取行情定时器
            down:null,//涨跌样式
            downcolor:'#999',//涨跌颜色
            isselected:false//navbar是否切换
        };
    },
    computed: {
      frozenbase(){//冻结墓数 每手价格（市场价格或前收价格）*权利金费率*交易手数。
        return this.details.price*this.product_item.fees*this.orderlist.entriesHands
        
      },
      frozenmoney(){
        //冻结权利金额
        //若为当曰台约（即当曰上牛盘到夜盘）
        //台约冻结权利金额=冻结墓数*权利金冻结比例
        //若为次曰台约（即次曰上牛盘）
        //台约冻结权利金额=冻结墓数*权利金冻结比例*权利金冻结比例
        //用户余额
        if(this.time.nextFlag==1){//若为次日上午盘
            return (this.frozenbase*this.product_item.freezeRight*this.product_item.freezeRight).toFixed(2)
        }else{
            return (this.frozenbase*this.product_item.freezeRight).toFixed(2)
        }
        
      }
        
    },
    components: {echarts},
    watch: {
        'details.diff'(val,old){//监测价格变动
        // if (this.isselected) {//如果是切换navbar导致价格变化
        //     this.down=null
        //     this.downcolor='#999'
        //     this.isselected=false
        //     return
        // }
            console.log(val,old)
            if (val>0) {
                this.down=false
                this.downcolor='#ff4e00'
            }else if (val<0) {
                this.down=true
                 this.downcolor='#1eba31'
            }
            // if (val>old) {
            //     this.down=false
            //     this.downcolor='#ff4e00'
            // }else if(val<old){
            //     this.down=true
            //     this.downcolor='#1eba31'
            // }
        },
        selected(n, o) {
            //navbar变动下面内容变动
            this.isselected=true
            console.log(n);
            this.product_item = this.products[n];
            this.getdetails()
            this.gettimes()
        },
    },
    beforeDestroy(){
        clearInterval(this.detailstimer)
    },
    created() {
        this.loading();
        this.getuserinfo()
    },
    methods: {
        loading() {
            //页面加载触发
            
            this.$axios.post("/api/trade/contract_list_query").then(res => {//获取产品信息
                if(res.data.errorCode==0){
                    this.products=res.data.data
                    this.product_item = this.products[0];
                    this.gettimes()
                    if(this.detailstimer==null){
                        this.getdetails()
                    }
                    clearInterval(this.detailstimer)
                    this.detailstimer=null
                    this.detailstimer=setInterval(()=>{
                            this.getdetails()
                    },3*1000)
                }else{
                    Toast(res.data.errorMsg)
                }
            }).catch(err => {

            });
        },
        getuserinfo(){
            this.$axios.post("/api/user/query_user_info").then(res => {//获取用户信息
                if(res.data.errorCode==0){
                    this.userData=res.data.data
                }else{
                    Toast(res.data.errorMsg)
                }
            }).catch(err => {
            });
        },
        change(num){//加减手数
            num==1?this.orderlist.entriesHands++:this.orderlist.entriesHands--
            if(this.orderlist.entriesHands>1000){
                Toast('手数不能超过单笔最大下单量');
                this.orderlist.entriesHands=1000
            }else if(this.orderlist.entriesHands<10){
                Toast('手数不能小于单笔最小下单量');
                 this.orderlist.entriesHands=10
            }
            

        },
        selectedtime(time){//选择当前下单时间
            if(time.timeout){
                return
            }
            this.orderlist.buyTimeId=time.id
            this.time=time
            console.log(this.time)
        },
        gettimes(){
            this.$axios({//获取交易时间
                url:'/api/trade/times',
                method:'post',
                params:{
                    code:this.product_item.code
                }
            }).then(res=>{
                if(res.data.errorCode==0){
                    this.times=res.data.data
                    for (let i = 0; i < this.times.length; i++) {
                        if (this.times[i].beginTime) {
                            if (new Date(new Date().getTime()+ 1 * 20 * 60 * 1000)>new Date(this.times[i].beginTime.replace(/\-/g, "/"))) {
                                this.$set(this.times[i],'timeout',true)
                            }
                        }
                        
                    }
                }else{
                    Toast(errorMsg)
                }
            }).catch(err=>{

            })
        },
        getdetails(){//根据code获取当前code最新行情及下单时间
            
            this.$axios({//获取最新行情
                url:'/api/market/latest_market',
                method:'get',
                params:{
                    codes:this.product_item.code
                }
            }).then(res=>{
                if (res.data.errorCode==0) {
                    this.details=res.data.data[0]
                }
            }).catch(err=>{

            })
        },
        order(trend) {
            //下单
            if(!this.orderlist.buyTimeId){
                Toast('请选择交易时间')
                return
            }
            if(this.orderlist.entriesHands>1000){
                Toast('手数不能超过单笔最大下单量');
                this.orderlist.entriesHands='1000'
                return
            }else if(this.orderlist.entriesHands<10){
                Toast('手数不能小于单笔最小下单量');
                 this.orderlist.entriesHands='10'
                 return
            }
            this.orderlist.buyUpDown = trend; //获取走向
            this.orderlist.code = this.product_item.code; //获取下单产品编号
            this.$axios({
                url: "/api/trade/create_order",
                method: "post",
                data: this.orderlist,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            }).then(res => {
                if (res.data.errorCode==0) {
                    Toast('下单成功,可在页面下方持仓盈亏查看明细')
                    this.getuserinfo()
                }else{
                    Toast(res.data.errorMsg)
                }
            }).catch(err => {

            });
        }
    }
};
</script>

<style scoped lang="">
.a_tranmenu {
    width: 100%;
    height: 50px;
    background: #00baff;
}
.a_tranmenu li {
    width: 50%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    float: left;
    position: relative;
}
.a_tranmenu li:first-child::before {
    content: "";
    width: 1px;
    height: 40%;
    background: #ffffff;
    position: absolute;
    top: 30%;
    right: 0;
}
.a_tranmenu li a {
    font-size: 14px;
    padding: 0 2px;
    color: #ffffff;
    border-bottom: 0px solid #ffffff;
}
.a_tranmenu li a b {
    font-weight: normal;
    padding: 0 3px;
}

.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #00baff;
    color: #00baff;
    margin-bottom: 0;
}
.mint-navbar .mint-tab-item {
    padding: 12px 0;
    font-size: 15px;
}
.i_datacontent {
    width: 100%;
    padding: 2% 0;
    background: #ffffff;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    height: 6rem;
}
.i_datacontent .i_left {
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
    color: #ff4e00;
    border-right: 1px solid #eeeeee;
}
.i_datacontent .down{
    color: #1eba31;
}

.i_datacontent .i_left span {
    display: block;
    /* color: #1eba31; */
    font-size: 23px;
    /* margin-bottom: 2%; */
    text-align: center;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
}

.i_rise .i_right span label {
    color: #ff4e00;
}
i.i_fh {
    font-size: 20px;
}
.i_datacontent .new_ahei {
    height: 20px;
    line-height: 20px;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.i_datacontent .i_right {
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
}
.i_datacontent .i_right > p:first-child {
    height: 32px;
    line-height: 32px;
}

.i_datacontent .i_right p {
    text-align: left;
    padding-left: 5%;
    height: 20px;
    line-height: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    /* padding: 2% 0; */
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.i_datacontent .i_right span {
    font-size: 13px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #333333;
}
.tran_span_box {
    width: 100%;
    clear: both;
    padding: 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.tran_span_box span.select_bar {
    color: #00baff;
    border: 1px solid #00baff;
}
.tran_span_box span {
    padding: 5px;
    border-radius: 5px;
    color: #333333;
    font-size: 14px;
    display: inline-block;
    margin-top: 6px;
    border: 1px solid #eeeeee;
}
.principal-list {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-align-content: space-between;
    -ms-flex-line-pack: justify;
    align-content: space-between;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    -webkit-box-pack: start;
    justify-content: flex-start;
}


.principal-item {
    width: 48%;
    margin-right: 2%;
    background: white;
    color: black;
    border: 1px solid #949494;
    text-align: center;
    font-size: 12px;
    line-height: 15px;
    border-radius: 5px;
    padding: 10px;
    padding-left: 3px;
    padding-right: 3px;
    margin-bottom: 10px;
}
.principal-disabled {
    background: lightgray;
    color: black;
    border: 1px solid #949494;
}
.principal-active {
    background: #f65a41;
    color: white;
    border-color: #f65a41;
}

.buy_cz_box {
    border-top: 1px solid #eeeeee;
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
}
.buy_one {
    padding: 3px 0%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* border-bottom: 1px solid #EEEEEE; */
}
.buy_one span {
    font-size: 13px;
    display: block;
    padding-left: 2rem;
}

.productName {
    font-size: 18px !important;
}
.buy_one span label,
.buy_one label,
.div_money label {
    color: #ff4e00;
}
.buy_one span label b,
.buy_one label b {
    font-size: 13px;
    font-weight: normal;
}
.div_money {
    padding-left: 6% !important;
    font-size: 15px;
}
.flex-container {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    width: 100%;
}
.flex-item_two {
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 13px;
    padding-bottom: 6px;
}
.orderNum {
    padding: 0px 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-bottom: 10px;
}

.border_buttom {
    border-bottom: 1px solid #eeeeee;
}
.flex-item_one {
    width: 110px;
}
.label_title {
    font-size: 15px;
    padding-left: 7%;
    color: black !important;
    line-height: 34px;
}
.flex-item_three {
    -webkit-flex: 3;
    -webkit-box-flex: 3;
    -ms-flex: 3;
    flex: 3;
    line-height: 34px;
}
.sum_button_left {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
}
.sum_button_right {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
}
.sum_button {
    width: 36px;
    height: 36px;
    font-size: 14px;
    text-align: center;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
    vertical-align: middle;
    background: white;
}
.input_sum {
    width: 90px;
    height: 36px;
    font-size: 14px;
    text-align: center;
    margin-left: -3px;
    margin-right: -3px;
    padding-left: 0px;
    padding-right: 0px;
    border-left: 0px;
    border-right: 0px;
    vertical-align: bottom;
}
input,
button,
textarea {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    border: 1px solid #a9a9a9;
    outline: none;
    font-size: 14px;
    line-height: normal;
}

.tran_quota {
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 8px;
    padding: 0 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #ffffff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
}
.tran_btn {
    height: 70px;
    display: block;
    text-align: center;
}
.tran_btn button:first-child,
.tran_btn a:first-child {
    background: #00baff;
}
.tran_btn button,
.tran_btn a {
    width: 48%;
    height: 42px;
    line-height: 40px;
    margin-top: 16px;
    display: inline-block;
    border: none;
    color: #ffffff;
    font-size: 14px;
    border-radius: 4px;
    background: #00baff;
}
.buy_explain {
    width: 100%;
    padding: 8px 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 1px;
    padding-bottom: 8px;
    background: #ffffff;
}
.buy_explain span,
.buy_explain p {
    font-size: 13px;
    color: #999999;
    line-height: 170%;
}
.tran_msg {
    margin-top: 8px;
    background: #ffffff;
}
.tran_msg li {
    height: 50px;
    line-height: 50px;
    padding: 0 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
}
.tran_msg li a {
    font-size: 14px;
    display: block;
}
.tran_msg li a label {
    color: #333333;
}
.tran_msg li a i {
    font-size: 14px;
    float: right;
    color: #999999;
}
.tran_msg li a span {
    color: #999999;
    float: right;
}
.tran_box{
    background: #fff;
}
</style>
