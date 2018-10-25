<template>
  <div class="button-wrapper">
      <button v-text="btnVal" @click="saveInfo"></button>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      btnVal: String
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
    saveInfo () {
        alert('save from information');
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.button-wrapper {
    padding: 0 .2rem;
    margin-top: .2rem;
    button {
        width: 100%;
        height: 0.8rem;
        border-radius: .4rem;
        background: #4b74e5;
        font-size: .28rem;
        text-align: center;
        color: #fff;
    }
}
</style>