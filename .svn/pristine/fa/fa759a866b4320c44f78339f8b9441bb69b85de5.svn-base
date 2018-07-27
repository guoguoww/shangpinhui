<template>
  <div id="myChart"  style="height:260px">

  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
     props: ["interval",'code'],
    name: "echarts",
    data: function() {
        return {
            myChart: null,
            fsdata:[],
            kdate:[],//k线时间
            kvalues:[],//k线value
            fsdate:[],//分时线时间
            fsvalue:[],//分时线值
            klinetimer:null
        };
    },
    mounted: function() {
        // var myChart = echarts.init(document.getElementById('myChart'));
        // myChart.setOption(this.klineoptions);
        // this.myChart = myChart;
        if(this.klinetimer==null){
            this.getkline()
        }
        clearInterval(this.klinetimer)
        this.klinetimer=null
        this.klinetimer=setInterval(()=>{
            this.getkline()
        },1000*60)
        
        window.interval=this.interval
    },
    destroyed () {
      clearInterval(this.klinetimer)  
    },
    watch: {
        code(val){
            console.log(val,this.code)
            this.getkline()
        },
        interval(val){
            console.log(val,this.code)
            window.interval=this.interval
            this.getkline()
            // if(this.klinetimer==null){
            // this.getkline()
            // }
            // clearInterval(this.klinetimer)
            // this.klinetimer=null
            // this.klinetimer=setInterval(()=>{
            //     this.getkline()
            // },1000*60)
        }
    },
    computed: {

      fsoptions(){//分时线options
       return {
            tooltip: {
                trigger: "axis"
                // axisPointer: {
                // type: 'cross'
                // }
            },
            grid: {
                top: "5%",
                left: "13%",
                right: "3%",
                bottom: "10%"
            },
            xAxis: {
                // show:false,
                type: "category",
                boundaryGap: false,
                data: this.fsdate,
                axisLabel: {
                    textStyle: {
                        fontFamily: "verdana",
                        fontSize: 9,
                        fontStyle: "normal"
                    }
                }
            },
            yAxis: {
                type: "value",
                scale: true,
                axisLabel: {
                    textStyle: {
                        fontFamily: "verdana",
                        fontSize: 9,
                        fontStyle: "normal"
                    }
                }
            },
            animation: false,
            series: [
                {
                    name: "新价",
                    data: this.fsvalue,
                    type: "line",
                    symbol: "none",
                    color: "#23C3FF",
                    areaStyle: {
                        normal: {
                            color: "#CDF2FF"
                        }
                    },
                    lineStyle: {
                        width: 1
                    }
                }
            ]
        };
      },
      klineoptions(){//k线options
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                formatter: function (params) {
                    var res = params[0].seriesName + ' ' + params[0].name;
                    res += '<br/> 开盘 : ' + params[0].value[1] + ' 最高 : ' +params[0].value[3];
                    res += '<br/> 收盘 : ' + params[0].value[2] + ' 最低 : ' +params[0].value[4];
                    return res;
                },
            },
            grid: {
                top: '5%',
                left: '13%',
                right: '3%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: this.kdate,
                scale: true,
                boundaryGap: false,
                axisLine: {
                    onZero: false
                },
                splitLine: {
                    show: false
                },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
                axisLabel: {
                    textStyle: {
                        fontFamily: 'verdana',
                        fontSize: 9,
                        fontStyle: 'normal',
                    },
                    formatter: function (value, index) {
                        
                        if(interval=='1d'){
                           return value.substring(5, 11);
                        }else{
                            return value.substring(11, 19);
                        }
                      

                    }
                }
            },
            yAxis: {
                scale: true,
                axisLabel: {
                    textStyle: {
                        fontFamily: 'verdana',
                        fontSize: 9,
                        fontStyle: 'normal',
                    }
                }
            },
            dataZoom: [{
                    type: 'inside',
                    // start: 50,
                    start: 0,
                    end: 100
                },
                {
                    show: true,
                    type: 'slider',
                    y: '90%',
                    start: 50,
                    end: 100
                }
            ],
            animation: false,
            series: [{
                    name: 'K线',
                    type: 'candlestick',
                    data: this.kvalues,
                    itemStyle: {
                        normal: {
                            color: '#ec0000',
                            color0: '#00da3c',
                            borderColor: '#8A0000',
                            borderColor0: '#008F28' 
                        }
                    },
                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: this.calculateMA(this.kvalues, 5),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            // opacity: 0.5,
                            width: 1
                        }
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: this.calculateMA(this.kvalues, 10),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    }
                },
                {
                    name: 'MA20',
                    type: 'line',
                    data: this.calculateMA(this.kvalues, 20),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: this.calculateMA(this.kvalues, 30),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    }
                },
            ]
        }
      }
    },
    methods: {
        getkline(){//获取k线图数据
            this.$axios({
                url:'/api/market/kline_data',
                method:'post',
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data:{
                    code:this.code,
                    interval:this.interval,
                    rows:'200'
                }
            }).then(res=>{
                if (res.data.errorCode==0) {
                    if (this.interval==1) {//如果是分时线
                        //this.myChart.clear()
                        this.fsdate=[]
                        this.fsvalue=[]
                        this.splitdata(res.data.data)
                        var myChart = echarts.init(document.getElementById('myChart'));
                        myChart.clear()
                        myChart.setOption(this.fsoptions);
                        this.myChart = myChart;
                    }else{
                        //this.myChart.clear()
                        console.log(res.data.data)
                        this.kdate=[]
                        this.kvalues=[]
                        this.splitkdata(res.data.data)
                        console.log(this.kvalues)
                        var myChart = echarts.init(document.getElementById('myChart'));
                        myChart.clear()
                        myChart.setOption(this.klineoptions);
                        this.myChart = myChart;
                    }
                }
            }).catch(err=>{

            })
        },
        splitdata(fsdata){//分割分时线数据
            for (var i = 0; i < fsdata.length; i++) {
                this.fsdate.push(fsdata[i].time.split(' ')[1]);
                this.fsvalue.push(fsdata[i].close); // 收盘
            }
        },
        splitkdata(klinedata){//分割k线数据
            for (var i = 0; i < klinedata.length; i++) {
                this.kdate.push(klinedata[i].time);
                var arr=[]
                arr.push(klinedata[i].open,klinedata[i].close,klinedata[i].high,klinedata[i].low)
                this.kvalues.push(arr)
            }
            console.log(this.kvalues)
        },
        update(data) {//更新
            this.myChart.setOption({
                series: [
                    {
                        data: data
                    }
                ]
            });
        },
        
        clear() {//清空
            this.myChart.clear();
        },
        calculateMA(valueData, dayCount) {
        var result = [];
        for (var i = 0, len = valueData.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += Number(valueData[i - j][1]);
            }
            result.push(sum / dayCount);
        }
        console.log(valueData)
        return result;
    }
    }
};
</script>

<style rel="stylesheet/scss" scoped>
</style>