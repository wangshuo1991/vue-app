<template>
  <div class="order-wrapper">
      
      <top-bar title="订单查询"></top-bar>

      <div class="search">
        <input
            type="text" 
            class="search-ipt" 
            placeholder="请输入查询企业" 
            v-model="keyword">
      </div>
      
      <div class="order-info" ref="orderInfos">
          <ul>
              <li 
              class="order-item" 
              v-for="item in searchResult()" 
              :key="item.id"
              @click="selectInfo(item)">
                  <div class="order-avstar">
                      <img src="" alt="">
                  </div>
                  <div class="order-content">
                      <h2 class="company">{{item.company}}</h2>
                      <p class="time-text">
                        <span class="order-time">{{item.orderTime}}</span>
                        <span class="order-code">{{item.orderCode}}</span>
                      </p>
                  </div>
                  
              </li>
          </ul>
      </div>

      <Details :details="currentList" ref="details"></Details>  

  </div>
</template>

<script>
import BScroll from 'better-scroll';
import TopBar from '../topbar/TopBar'
import Details from '../details/Details'

export default {
  components:{
      TopBar,
      Details
  },
  props:{},
  data(){
    return {
        orderList: [],
        keyword: '',
        currentList: {}
    }
  },
  watch:{},
  computed:{},
  methods:{
    getProInfo(){ /* 获取数据 */
        this.$http.get("/api/orderList").then((res) => {
            this.orderList = res.body.data;
            this.$nextTick(() => {
                this._initScroll();
                
            });
        });
    },
    _initScroll () { /* 初始化 better-scroll */
        this.orderInfosScroll = new BScroll(this.$refs.orderInfos,{
        }); 
    },
    searchResult () { /* 根据输入结果显示内容 */
        return this.orderList.filter((item) => {
            if(item.company.includes(this.keyword)) {
                return item;
            }
        });
    },
    selectInfo(item){
        // this.$refs.details.showFn();
    }
  },
  created(){
      this.getProInfo();
  },
  mounted(){
      
  }
}
</script>
<style lang="scss" scoped>

    .order-wrapper {

        .search {
            font-size: 0;
            padding: .25rem;
            background: #4b74e5;

            .search-ipt {
                width: 100%;
                display: inline-block;
                height: .6rem;
                box-sizing: border-box;
                padding-left: .2rem;
                font-size: .24rem;
                vertical-align: top;
                border-radius: .4rem;
            }
        }

            
        .order-info {
            position: fixed;
            top: 2.2rem;
            bottom: 0;
            width: 100%;
            overflow: auto;
            background: #f5f5f5;

            .order-item {
                display: flex;
                height: 1.1rem;
                padding: .15rem .2rem;
                margin-bottom: .2rem;
                background: #fff;

                .order-avstar {
                    flex: 0 0 1rem;
                    width: 1rem;
                    height: 1rem;
                    background: #f1f1f1;
                    margin-right: .2rem;
                }

                .order-content {
                    flex: 1;

                    .company {
                        height: .4rem;
                        font-size: .28rem;
                        line-height: .4rem;
                        color: #333;
                    }

                    .time-text {
                        overflow: hidden;
                        margin-top: .38rem;

                        .order-time,.order-code {
                            font-size: .22rem;
                            color: #888;
                        }

                        .order-time {
                            float: left;
                        }

                        .order-code {
                            float: right;
                        }
                        

                    }
                }
            }

        }

       
    }
    
</style>