<template>
    <div class="user_main">
        <mt-header fixed :title="title">
            <a @click='back' slot="left">
                <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
        <ul class="infor_list sec_number">
            <!-- <li>
                <input disabled="" placeholder="请输入手机号" type="number" v-model="cardData.phone">
            </li> -->
            <li @click="showpopup">
                <input disabled="" placeholder="请选择开户行" type="text" v-model="cardData.bankName">
            </li>
            <li>
                <input placeholder="请输入开户支行" type="text" v-model="cardData.openBankName">
            </li>
            <li>
                <input placeholder="请输入开户人姓名" type="text" v-model="cardData.chnName">
            </li>
            <li>
                <input placeholder="请输入银行卡号" type="text" v-model="cardData.bankAccount">
            </li>
            <li>
                <input placeholder="请输入身份证号" type="text" v-model="cardData.idCard">
            </li>
            <li>
                <input placeholder="请输入手机号" type="text" v-model="cardData.phone">
            </li>

            <li>
                <button class="confirm" @click="addCard()">确认</button>
            </li>
        </ul>
        <mt-popup v-model="visible" position="bottom" style="width:100%;">
            <mt-picker :slots="banks" @change="onValuesChange"></mt-picker>
        </mt-popup>
    </div>
</template>

<script type="">
import { Toast } from 'mint-ui';
import banklist from "../../../static/js/banklist";

export default {
    name: "add_bankcard",
    data() {
        return {
            title: "添加银行卡",
            visible: false, //选择银行
            cardData: {
                bankAccount: "", //银行卡号
                bankName: "", //银行名称
                chnName: "", //真实姓名
                idCard: "", //身份证号
                phone: "", //银行预留手机号
                openBankName: "" //开户支行
            },
            banklist
        };
    },
    computed: {
        banks(){//银行列表
            let arr=[]
            for (let i = 0; i < this.banklist.length; i++) {
                arr.push(this.banklist[i].text)
            }
            return  [
                {
                    flex: 1,
                    values: arr
                }
            ]
        }      
    },
    components: {},
    methods: {
        onValuesChange(picker, values) {
            this.cardData.bankName = values[0];
        },
        showpopup() {
            //弹出选择框
            this.visible = true;
        },
        addCard() {
            //确认添加
            this.$axios({
                url: "/api/user/save_bank",
                method: "post",
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: this.cardData
            }).then(res => {
                if(res.data.errorCode==0){
                    Toast('添加成功')
                    this.$router.push('/user_bankcard')
                }else{
                    Toast(res.data.errorMsg)
                }
            })
                .catch(err => {});
        }
    }
};
</script>

<style scoped lang="">
.sec_number {
    border-top: 1px solid #eeeeee;
    margin-top: 8px;
    padding-top: 15px;
}

.infor_list {
    margin-bottom: 8px;
    background: #ffffff;
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
    /* border-bottom: 1px solid #eeeeee; */
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
    border: 1px solid #eee !important;
    border-radius: 6px;
}
.sec_number li .confirm {
    width: 96%;
    margin: 0 auto;
    display: block;
    height: 46px;
    border-radius: 4px;
    background: #00baff;
    color: #ffffff;
    font-size: 14px;
    border: none;
}
</style>
