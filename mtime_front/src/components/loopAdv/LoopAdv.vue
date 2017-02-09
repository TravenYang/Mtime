<template>
  <div class="loopAdv">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="imgload" src="./get.jpg">
        </div>
        <div class="swiper-slide">
          <img class="imgload" src="./get1.jpg">
        </div>
        <div class="swiper-slide">
          <img class="imgload" src="./get2.jpg">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'assets/js/swiper-3.4.1.min.js'
export default{
  mounted(){
    let loopAdv = new Swiper('.swiper-container',{
      autoplay: 2000,
      direction:'horizontal',
      loop:true,
      pagination:'.swiper-pagination',
      paginationClickable :true,
      autoplayDisableOnInteraction : false,
      observer:true,
      observeParents:true
    });
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/rem";
  .loopAdv{
    .imgload{
      width:100%;
    }
    .swiper-pagination-bullets {
      bottom:2px/$ppr;
      .swiper-pagination-bullet-active {
        background: #fff;
      }
    }
  }
</style>
