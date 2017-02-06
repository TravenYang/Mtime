<template>
  <div class="head-adv" v-show="showHeadAdvVal">
    <a>
      <div class="head-close" @click.stop="showHeadAdv()">
        <i class="head-close-pic"></i>
      </div>
      <div class="head-logo">
        <i class="head-logo-pic"></i>
      </div>
      <div class="head-content">
        <div class="head-content-first">您已收到150元新人红包</div>
        <div class="head-content-second">下载时光网App查看（仅限新用户）</div>
      </div>
      <div class="head-app">
        下载APP
      </div>
    </a>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex';
  export default{
    computed: {
      ...mapGetters([
        'showHeadAdvVal'
      ])
    },
    methods: {
      ...mapActions([
        'showHeadAdv'
      ])
    }
  };
</script>
<style lang="scss">
  @import "../../assets/scss/rem";;
  .head-adv {
    background: #1e2837;
    & > a {
      display: flex;
      align-items: center;
      cursor: pointer;
      .head-close-pic {
        display: block;
        width: 2.5rem;
        height: 5rem;
        background: url("i_close_control.png") no-repeat 50%;
        background-size: 1.6rem auto;
      }
      .head-logo-pic {
        display: block;
        width: 4rem;
        height: 5rem;
        background: url("share07.png") no-repeat 50%;
        background-size: 3.5rem auto;
      }
      .head-content{
        padding-left:4px/$ppr;
        .head-content-first,.head-content-second{
          line-height: 1.5;
          font-style: normal;
          color: #008ce3;
          font-size: 1.5rem;
        }
        .head-content-second{
          font-size: 1.1rem;
          color: #a9dcff;
        }
      }
      .head-app{
        display: inline-block;
        width: 6.5rem;
        height: 2.5rem;
        border: 1px solid #0075c4;
        border-radius: 1.5rem;
        background-color: #0087dc;
        color: #fff;
        font-size: 1.1rem;
        text-align: center;
        line-height: 2.5rem;
      }
    }

  }
</style>
