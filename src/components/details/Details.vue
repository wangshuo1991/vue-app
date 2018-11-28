<template>
  <div class="order-details">
      <Top :back="true">订单详情</Top>
      <div class="main-content">
        {{$route.params.lid}}
      </div>
      
  </div>
</template>

<script>

import Top from '@/base/Top.vue'
export default {
  components:{
    Top
  },
  props:{
  
  },
  data(){
    return {
      
    }
  },
  watch:{},
  computed:{},
  methods:{
    getInfo(){
      
    }
  },
  created(){},
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
  }
</style>