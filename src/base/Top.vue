<template>
  <div class="top">
      <slot></slot>
      <i class="iconfont icon-icon-test" v-if="back" @click="goback"></i>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    back: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
    goback(){
      this.$router.go(-1);
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: .34rem;
    color: #fff;
    background: #4B74E5;

    i {
      position: absolute;
      left: .2rem;
    }

}
</style>