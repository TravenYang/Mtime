<template>
  <div class="search">
    <div class="search_choose">
      <span>上海</span>
      <i></i>
    </div>
    <div class="search_box">
      <input class="search_text" @keyup.enter="toSearch" type="text" :placeholder="textType" v-model="keyWord">
      <a class="search_clear" @click="clear"></a>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return{
        keyWord:''
      }
    },
    props:{
      textType:{
        type:null
      }
    },
    methods:{
      toSearch(){
        if(this.keyWord){
          this.$emit('toSearch',this.keyWord);
        }else{
          alert('搜索不能为空');
        }

      },
      clear(){
        this.keyWord = '';
      }
    }
  };
</script>

<style lang="scss">
  @import "../../assets/scss/rem";

  .search {
    display: flex;
    padding: .8rem 1.5rem .75rem;
    background: #f6f6f6;
    /*background: #1c2635;*/
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
    .search_choose {
      width: 6rem;
      position: relative;
      span {
        font-size: 1.6em;
      }
      i {
        position: absolute;
        right:5px/$ppr;
        top:50%;
        display:inline-block;
        width:.9rem;
        height:.5rem;
        background: url('i_city.png') no-repeat;
        background-size: cover;
      }
    }
    .search_box {
      width: 100%;
      position: relative;
      padding-right: 10px/$ppr;
      .search_text {
        width: 80%;
        height: 3rem;
        line-height: 1.4rem;
        font-size: 1.4rem;
        padding: 0 1.8rem 0 2rem;
        border-radius: .5rem;
        outline: none;
        background: url('search_ico_01.png') no-repeat .5rem center;
        background-color: #fff;;
        background-size: 1.3rem 1.3rem;
      }
      .search_clear {
        position: absolute;
        right:1.4rem;
        top: 28%;
        display: inline-block;
        width: 2.2rem;
        height: 2.2rem;
        background: url("search_clear.png") no-repeat ;
        background-size: 1.3rem 1.3rem;
      }
    }

  }
</style>
