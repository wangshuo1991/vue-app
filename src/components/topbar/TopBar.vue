<template>
  <div class="top-bar">
      <header>
          <div class="header-title" v-text="title">
             
          </div>
      </header>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    title: String
  },
  data(){
    return {
       
    }
  },
  watch:{
     
  },
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>

.top-bar {
    header {
        position: relative;
        width: 100%;
        height: 0.8rem;
        background: #4B74E5;

        .header-title {
            width: 2.4rem;
            height: 0.8rem;
            margin: 0 auto;
            line-height: .8rem;
            color: #fff;
            font-size: .34rem;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
}

</style>