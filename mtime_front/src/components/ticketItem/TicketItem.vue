<template>
<div class="ticket_item">
  <div class="cinima_name_cnt">
    <b class="cinima_name">SFC上影影城（永华店）</b>
    <span class="cinima_price">￥<b>45</b>起</span>
  </div>
  <div class="cinima_address">上海市虹桥路1号徐家汇港汇广场六楼</div>
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
 export default{};
</script>

<style lang="scss">
.ticket_item{
  border-bottom: 1px solid #D8D8D8;
  padding: 1.2rem 0;
  .cinima_name_cnt{
    .cinima_name{
      font-size: 1.5rem;
      font-weight: bold;
      padding-right:10.3rem;
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
