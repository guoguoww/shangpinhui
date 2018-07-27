<template>
  <div class="user_main">
    <mt-header fixed :title="title">
        <a @click='back' slot="left">
            <mt-button icon="back"></mt-button>
        </a>
    </mt-header>
    <div class="main" v-html='content'>
        
    </div>
  </div>
</template>

<script type="">
export default {
  name:"info_details",
  data() {
    return {
        title:'新闻标题',
        content:''
    }
  },
  components: {

  },
  watch: {
      
  },
  mounted () {
      this.loading()
  },
  methods: {
    loading(){
        this.$axios({
            url:'/api/home/news/findByIdNews',
            method:'post',
            params:{
                id:this.$route.query.id
            }
        }).then(res=>{
            console.log(res.data.content);
            this.content=res.data.content
        }).catch(err=>{
            
        })
    }    
  }
}
</script>

<style scoped lang="">
.mint-header{
    background-color: #ffffff;
    color: #555;
}
.main{
        width: 100%;
    padding: 2% 3% 0%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #FFFFFF;
}
</style>
