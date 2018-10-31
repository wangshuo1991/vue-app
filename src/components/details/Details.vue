<template>
  <div class="order-details" v-show="show">
      <top-bar title="订单详情"></top-bar>

  </div>
</template>

<script>
import TopBar from '../topbar/TopBar'

export default {
  components:{
    TopBar
  },
  props:{
    details: {
      type: Object
    }
  },
  data(){
    return {
      show: false
    }
  },
  watch:{},
  computed:{},
  methods:{
    showFn(){
      this.show = true;
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
  .order-details {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: #f1f1f1;
  }
</style>