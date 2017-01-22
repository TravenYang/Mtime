<template>
  <div class="search">
    <div class="search_choose">
      <span>上海</span>
      <i></i>
    </div>
    <div class="search_box">
      <input class="search_text" type="text" placeholder="影片/影院/影人，任你搜">
      <a class="search_clear"></a>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{};
</script>

<style lang="scss">
  @import "../../assets/scss/rem";

  .search {
    display: flex;
    padding: .8rem 1.5rem .75rem;
    width: 100%;
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
        right: 24px/$ppr;
        top: -6%;
        display: inline-block;
        width: 5rem;
        height: 3.3rem;
        background: url("search_clear.png") no-repeat 2.5rem center;
        background-size: 1.3rem 1.3rem;
      }
    }

  }
</style>
