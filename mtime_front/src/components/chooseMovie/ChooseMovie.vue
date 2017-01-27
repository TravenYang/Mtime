<template>
<div class="chooseMovie">
  <div class="header">
    <div class="back">1</div>
    <div class="share"></div>
  </div>
  <div class="cinima">
    <div class="cinima_left">
      <b class="cinima_name">SFC上影影城（永华店）</b>
      <div class="cinima_service">
        <i class="cinima_service_01"></i>
        <i class="cinima_service_02"></i>
        <i class="cinima_service_03"></i>
        <i class="cinima_service_04"></i>
        <i class="cinima_service_05"></i>
        <i class="cinima_service_06"></i>
      </div>
    </div>
    <div class="contact">
      <div>
        <div class="contact_phone"></div>
      </div>
      <div>
        <div class="contact_location"></div>
      </div>

    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default{};
</script>

<style lang="scss">
  .chooseMovie{
    .header{
      display: flex;
      background-color:#1C2635 ;
      .back,.share{
        width: 5.3rem;
        height: 4.4rem;
        background:url('./h_btn_back.png') no-repeat center;
        background-size: auto 1.8rem;
      }
      .share{
        margin-left: 20rem;
        background:url('./i_h_share.png') no-repeat center;
        background-size: auto 2.2rem;
      }
    }
    .cinima{
      display: flex;
      padding:1.5rem;
      .cinima_left{
        display: flex;
        flex-direction: column;
        .cinima_name{
          font-size: 1.5rem;
          font-weight: bold;
          /*padding-right:10.3rem;*/
          margin-bottom: 1rem;
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
      .contact{
        display: flex;
        align-items: center;
        margin-left:5rem;
        &>div{
          border-left:1px solid #7e8c8d;
          padding-left: 1rem;
          .contact_phone,.contact_location{
            height: 2.2rem;
            width: 1.7em;
            line-height: 2.2rem;
            background: url('./i_address_01.png') no-repeat;
            background-size: cover;
          }
          .contact_phone{
            background: url('./i_tel_01.png') no-repeat 0 .11rem;
            background-size: cover;
            margin-right:1.5rem;
          }
        }
      }
    }
  }
</style>
