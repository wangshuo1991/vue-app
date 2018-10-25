<template>
  <div class="input-box">
    <div class="w-input-wrapper">
        <div class="input-name" v-text="title"></div>
        <input 
        :type="type" 
        :placeholder="placeholder" 
        :value="value">
    </div>

  </div>  
  
</template>

<script>
export default {
  components:{},
  props:{
      title: String,
      type: String,
      placeholder: String,
      value: String
  },
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

.input-box {

    padding: 0 .2rem;
    background: #fff;

    .w-input-wrapper {
    width: 100%;
    height: .8rem;
    position: relative;
    padding: .1rem 0;
    border-bottom: 1px solid #e4e4e4;

    .input-name {
        position: absolute;
        top: .1rem;
        left: 0;
        width: 1.8rem;
        height: 0.8rem;
        line-height: .8rem;
        text-align: left;
        font-size: .28rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    input {
        display: block;
        width: 100%;
        height: 0.8rem;
        line-height: .4rem;
        padding: .2rem 0 .2rem 1.8rem;
        box-sizing: border-box;
        color: #878787;
        font-size: .28rem;
    }
}
}

</style>