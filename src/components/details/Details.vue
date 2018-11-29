<template>
  <div class="order-details">
      <Top :back="true">订单详情</Top>
      <Loading v-if="loading"></Loading>
      <div class="main-content" v-else>
        <div class="company-info">
          <div class="info-bg">
          </div>
          <div class="info-content">
            <div class="company" :style="{'background': _url}">
            </div>
            <ul>
              <li>
                <span>公司名称</span><span>{{detail.company}}</span>
              </li>
              <li>
                <span>订单时间</span><span>{{detail.orderTime}}</span>
              </li>
              <li>
                <span>订单编码</span><span>{{detail.orderCode}}</span>
              </li>
              <li>
                <span>公司地址</span><span>{{detail.adress}}</span> 
              </li>
              <li>
                <span>公司电话</span><span>{{detail.tel}}</span>
              </li>
            </ul>
            <div class="container">
              <h3 class="container-title">人数统计</h3>
            </div>
            <div class="container">
              <h3 class="container-title">体检统计</h3>
            </div>
          </div>
        </div>
      </div>
      
  </div>
</template>

<script>

import Top from '@/base/Top.vue'
import Loading from '@/base/Loading.vue'

export default {
  components:{
    Top,Loading
  },
  props:{
  
  },
  data(){
    return {
      detail: {},
      loading: true
    }
  },
  watch:{},
  computed:{
    id(){
      return this.$route.params.lid;
    },
    _url(){
      return "#fff url(" + this.detail.logo + ") no-repeat center center / .8rem .8rem";
    }
  },
  methods:{
    getInfo(){
      this.$http.get("/api/orderList").then((res)=>{
        let [a] = res.data.data.filter(item=>{return item.id==this.id});
        this.detail = a;
      }); 
    }
  },
  created(){
    let _this = this;
    setTimeout(() => {
      _this.loading = false;
      _this.getInfo();
    }, 2000);
    
  },
  mounted(){}
}
</script>
<style lang="scss" scoped>
  .order-details {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #f1f1f1;
    z-index: 100;

    .company-info {
      width: 100%;
      padding-bottom: .3rem;
      position: relative;

      .info-bg {
        position: absolute;
        width: 100%;
        height: 2.4rem;
        background: #4B74E5;
        z-index: 20;
      }

      .info-content {
        padding: .3rem .2rem;
        overflow: hidden;
        position: relative;
        z-index: 30;

        .company {
          position: absolute;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          top: .15rem;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 3px 3px 20px rgba(0,0,0,.2);
          overflow: hidden;
        }
        
        ul {
          padding: .6rem .2rem .2rem .2rem;
          margin-top: .4rem;
          background: #fff;
          border-radius: .2rem;

            li {
              line-height: 2.2;
              font-size: .24rem;
              color: rgb(155, 155, 155);
              display: flex;

              span {
                font-size: .24rem;
                
                &:first-child{
                  flex: 0 0 80px;  
                }

                &:last-child{
                  flex: 1;
                  color: #333;  
                  margin-left: .2rem;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
                
                
              }
            }
        }

        .container {
          margin-top: .3rem;
          padding: .2rem;
          height: 1.6rem;
          background: #fff;
          border-radius: .2rem;

          .container-title {
            font-size: .26rem;
            font-weight: 600;
            color: rgb(46, 48, 75);
          }
        }
        
      }

    }
  }
</style>