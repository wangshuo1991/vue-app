<template>
  <div class="load-container">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>

 

.load-container {
    position: fixed;
    top: .8rem;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);

    .loading {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      height: .2rem;
      z-index: 51;
      overflow: hidden;

      span {
        float: left;
        width: .2rem;
        height: .2rem;
        margin-right: .15rem;
        border-radius: 50%;
        background: #fff;
        animation: load 1.04s ease infinite;

        &:nth-child(1){
          animation-delay:0.13s;
        }

        &:nth-child(2){
          animation-delay:0.26s;
        }

        &:nth-child(3){
          animation-delay:0.39s;
        }

        &:nth-child(4){
          animation-delay:0.52s;
        }

        &:nth-child(5){
          animation-delay:0.65s;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

}

@keyframes load{
      0%{
          opacity: 1;
      }
      100%{
          opacity: 0;
      }
  }
</style>