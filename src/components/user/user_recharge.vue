<template>
  <div class="user_main">
    <mt-header fixed :title="title">
        <a @click='back' slot="left">
            <mt-button icon="back"></mt-button>
        </a>
    </mt-header>

    <mt-navbar v-model="selected">
        <mt-tab-item id="1">银行卡充值</mt-tab-item>
        <mt-tab-item id="2">支付宝充值</mt-tab-item>
        <mt-tab-item id="3">微信充值</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <mt-cell title="姓名" value="测试"></mt-cell>
            <mt-cell title="余额" value="测试"></mt-cell>
            <mt-cell title="银行卡" value="测试"></mt-cell>
            <mt-cell title="银行卡号" value="测试"></mt-cell>
            <mt-field label="充值金额" placeholder="请输入金额" type="number" >&nbsp; 元</mt-field>
            <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n" /> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <div style="width: 100%; text-align: center; margin-top: 5px; display: block;">
                <span style="width: 100%; text-align: center; height: 30px; line-height: 30px; font-size: 15px;color:#000;">
                    选择充值金额
                </span>

                <div class="money-list" style="padding-left: 10px;padding-bottom: 1px;padding-top: 20px; width: 100%">
                        <!----><span  class="money_item  money_active">
                            100元
                        </span><span  class="money_item ">
                            500元
                        </span><span  class="money_item ">
                            1000元
                        </span><span  class="money_item ">
                            5000元
                        </span><span  class="money_item ">
                            10000元
                        </span><span  class="money_item ">
                            50000元
                        </span>  
                </div>
            </div>
            <mt-cell title="充值金额" value="0元" class="rechargebg"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
                       <div style="width: 100%; text-align: center; margin-top: 5px; display: block;">
                <span style="width: 100%; text-align: center; height: 30px; line-height: 30px; font-size: 15px;color:#000;">
                    选择充值金额
                </span>

                <div class="money-list" style="padding-left: 10px;padding-bottom: 1px;padding-top: 20px; width: 100%">
                        <!----><span  class="money_item  money_active">
                            100元
                        </span><span  class="money_item ">
                            500元
                        </span><span  class="money_item ">
                            1000元
                        </span><span  class="money_item ">
                            5000元
                        </span><span  class="money_item ">
                            10000元
                        </span><span  class="money_item ">
                            50000元
                        </span>  
                </div>
            </div>
            <mt-cell title="充值金额" value="0元" class="rechargebg"></mt-cell>
        </mt-tab-container-item>
    </mt-tab-container>

<button class="my_comment" >确定</button>
  </div>
</template>

<script type="">
export default {
  name:"user_recharge",
  data() {
    return {
        title:'充值',
        selected:'1'
    }
  },
  components: {

  }
}
</script>

<style >
.mint-field-core{
    text-align: right;
    color: #999;

}
.mint-tab-container-item{
    font-size: 14px;
    color: #999;
}

.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #01ccf5;
    color: #01ccf5;
    margin-bottom: 0;
}
.mint-navbar{
    padding: .6rem 0;

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

.money-list {
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
 .money_item  {
    width: 31%;
    margin-right: 2%;
    background: #fff;
    color: #000;
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
.rechargebg{
    background-color: #eaeaea;
}
.money_active {
    background: #f65a41;
    color: #fff;
    border-color: #f65a41;
}
</style>
