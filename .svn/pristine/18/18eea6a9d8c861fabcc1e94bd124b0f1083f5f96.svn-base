<template>
  <div class="">
      <mt-header fixed title="行业资讯"></mt-header>
      <ul class="notice_list" id="news">
                <!-- <li >
                    <router-link to="/info_details">
                        <div>
                            <b>关于德意商品通部分系统升级通知</b>
                            <img src="http://fdfs.hnhhysy.com/group1/M00/00/04/dP-IKVszH3GAJV7CAAGS8GzyW2c311.jpg">
                            <dl>
                                <dd class="news_dd">
                                    2018-06-27
                                </dd>
                            </dl>
                        </div>
                    </router-link>
                </li> -->
                <li v-for="(i,index) in news" :key="index">
                    <router-link :to="{ path: 'info_details',query:{id:i.id} }">
                        <div>
                            <b>{{i.head}}</b>
                            <img :src="getimg(i.id)">
                            <dl>
                                <dd class="news_dd">
                                    {{i.createTime}}
                                </dd>
                            </dl>
                        </div>
                    </router-link>
                </li>


            </ul>
            <a class="more_seed"  style="display: block;" @click="loadmore">
                更多资讯
            </a>
  </div>
</template>

<script type="">
import { Toast } from "mint-ui";
export default {
  name:"info",
  data() {
    return {
        page:'1',
        rows:'3',
        news:[//资讯列表
            //  {
            //     id: "121",
            //     icon: "base64",
            //     head: "标题",
            //     createTime: "2018-6-27"
            // },
            // {
            //     id: "121",
            //     icon: "base64",
            //     head: "标题",
            //     createTime: "2018-6-27"
            // }
        ]
    }
  },
  components: {

  },
  created () {
    this.loading()  
  },
  methods: {
      loading(){
          this.$axios.get("/api/home/news/findBySumPage",{
            params: {
                page: this.page,
                rows: this.rows
            }
        }).then(res => {
            if (res.data.errorCode==0) {
                console.log(res.data.data.data);
                // if(res.data.data.data[0].id==res.data.data.data[length-1].id){
                //        return
                //    }
                if (res.data.data.data.length!=0) {
                   
                    this.news=this.news.concat(res.data.data.data)
                    // for (let i = 0; i < this.news.length; i++) {
                    //    this.$axios.get("api/home/news/findByIdNewsIcon",{
                    //        params:{
                    //            id:this.news[i].id
                    //        }
                    //    }).then(res=>{
                    //         this.$set(this.news[i],'icon',res.data)
                    //    })  
                    // }
                }else{
                    this.page--
                    Toast('没有更多')
                }
            }
            console.log(this.news);
            
        }).catch(err => {

        });
      },
      loadmore(){//加载更多
            this.page++ ;
            this.loading()
      },
      getimg(id){
        return 'http://'+location.host+process.env.BASEURL+'/api/home/news/icon/'+id
      }
  }
}
</script>

<style scoped lang="">
.title {
    width: 100%;
    max-width: 940px;
    height: 45px;
    line-height: 45px;
    color: #333;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    padding: 0 3%;
    margin-bottom: 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
}
.notice_list {
    width: 100%;
    max-width: 940px;
    margin: 8px auto 0;
    margin-top: 34px;
}
.notice_list li {
    background: #fff;
    margin-bottom: 8px;
    padding: 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
}
.notice_list li a {
    width: 100%;
    display: block;
}
.notice_list li div {
    padding-bottom: 2%;
}
.notice_list li b {
    font-size: 15px;
    color: #555;
}
.notice_list li img {
    width: 100%;
    height: 145px;
    display: block;
    margin: 8px 0;
}
.notice_list li div dl {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.notice_list li div dl dd:last-child {
    text-align: right;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.notice_list li div dl dd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #999;
    font-size: 14px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
 .more_seed {
    width: 100%;
    height: 48px;
    line-height: 48px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    text-align: center;
    display: block;
    font-size: 14px;
    color: #999;
}
.mint-header{
    background-color: #ffffff;
    color: #555;
}
</style>
