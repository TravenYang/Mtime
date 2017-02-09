<template>
<div class="ticket_item">
  <div class="cinima_name_cnt">
    <b class="cinima_name">{{info.name}}</b>
    <span class="cinima_price">￥<b>{{roundPrice}}</b>起</span>
  </div>
  <div class="cinima_address">{{info.address}}</div>
  <div class="cinima_service">
    <i class="cinima_service_01"></i>
    <i class="cinima_service_02"></i>
    <i class="cinima_service_03"></i>
    <i class="cinima_service_04"></i>
    <i class="cinima_service_05"></i>
    <i class="cinima_service_06"></i>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
 export default{
   props:{
     info:{}
   },
   computed:{
     roundPrice(){
       return Math.floor(Math.random()*(60-30+1)+30);
     }
   }
 };
</script>

<style lang="scss">
.ticket_item{
  border-bottom: 1px solid #D8D8D8;
  padding: 1.2rem 1.5rem;
  .cinima_name_cnt{
    display: flex;
    .cinima_name{
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 2rem;
      flex: 1;
    }
    .cinima_price{
      font-size: 1.2rem;
      vertical-align: bottom;
      color: #ff8600;
      b{
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
  .cinima_address{
    font-size: 1.2rem;
    padding:.8rem 0;
  }
  .cinima_service{
    i{
      display: inline-block;
      width: 1.8rem;
      height: 1.8rem;
      margin-right: .5rem;
      &.cinima_service_01{
        background: url('./i_cine_01.png') no-repeat;
        background-size: cover;
      }
      &.cinima_service_02{
        background: url('./i_cine_10.png') no-repeat;
        background-size: cover;
      }
      &.cinima_service_03{
        background: url('./is_cine_02.png') no-repeat;
        background-size: cover;
      }
      &.cinima_service_04{
        background: url('./is_cine_04.png') no-repeat;
        background-size: cover;
      }
      &.cinima_service_05{
        background: url('./is_cine_05.png') no-repeat;
        background-size: cover;
      }
      &.cinima_service_06{
        background: url('./is_cine_06.png') no-repeat;
        background-size: cover;
      }
    }

  }

}
</style>
