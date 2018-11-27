<template>
  <div class="top">
      <slot></slot>
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

}
</style>