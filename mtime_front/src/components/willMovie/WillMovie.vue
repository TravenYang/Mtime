<template>
  <div class="willMovie">
    <div class="most_want">最受关注<b> ( 10 部 )</b></div>
    <WillMovieItem></WillMovieItem>
    <LoopAdv class="loopAdv"></LoopAdv>
    <div class="most_want">即将上映<b> ( 36 部 )</b></div>
    <WillMovieItem></WillMovieItem>
  </div>
</template>

<script type="text/ecmascript-6">
  import WillMovieItem from 'components/willMovieItem/WillMovieItem';
  import LoopAdv from 'components/loopAdv/LoopAdv';
export default{
  components:{
    WillMovieItem,
    LoopAdv
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/rem";

  .willMovie {
    display: flex;
    flex-direction: column;
    padding:1.5rem;;
    .loopAdv{
      margin-bottom: 1.5rem;
    }
    .most_want {
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.1;
      & > b {
        font-weight: bold;
        color: #999;
      }
    }
  }
</style>
