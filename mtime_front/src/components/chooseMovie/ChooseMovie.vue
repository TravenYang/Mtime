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
    <div class="movie_cnt">
      <div class="movie_name">西游伏妖篇</div>
      <div class="movie_info">
        <span class="movie_info_time"> 明天上映</span>
        -
        <span class="movie_info_type">108分钟 - 奇幻 | 动作 | 喜剧</span>
      </div>
      <div class="toDetail"></div>
    </div>
    <div class="adv_bar">
      <span class="pic"></span>
      <span class="txt">用时光网App购票，更优惠！</span>
      <span class="download">立即下载</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{};
</script>

<style lang="scss">
  .chooseMovie {
    .header {
      display: flex;
      background-color: #1C2635;
      .back, .share {
        width: 5.3rem;
        height: 4.4rem;
        background: url('./h_btn_back.png') no-repeat center;
        background-size: auto 1.8rem;
      }
      .share {
        margin-left: 20rem;
        background: url('./i_h_share.png') no-repeat center;
        background-size: auto 2.2rem;
      }
    }
    .cinima {
      display: flex;
      padding: 1.5rem;
      .cinima_left {
        display: flex;
        flex-direction: column;
        .cinima_name {
          font-size: 1.5rem;
          font-weight: bold;
          /*padding-right:10.3rem;*/
          margin-bottom: 1rem;
        }
        .cinima_service {
          i {
            display: inline-block;
            width: 1.8rem;
            height: 1.8rem;
            margin-right: .5rem;
            &.cinima_service_01 {
              background: url('./i_cine_01.png') no-repeat;
              background-size: cover;
            }
            &.cinima_service_02 {
              background: url('./i_cine_10.png') no-repeat;
              background-size: cover;
            }
            &.cinima_service_03 {
              background: url('./is_cine_02.png') no-repeat;
              background-size: cover;
            }
            &.cinima_service_04 {
              background: url('./is_cine_04.png') no-repeat;
              background-size: cover;
            }
            &.cinima_service_05 {
              background: url('./is_cine_05.png') no-repeat;
              background-size: cover;
            }
            &.cinima_service_06 {
              background: url('./is_cine_06.png') no-repeat;
              background-size: cover;
            }
          }

        }
      }
      .contact {
        display: flex;
        align-items: center;
        margin-left: 5rem;
        & > div {
          border-left: 1px solid #7e8c8d;
          padding-left: 1rem;
          .contact_phone, .contact_location {
            height: 2.2rem;
            width: 1.7em;
            line-height: 2.2rem;
            background: url('./i_address_01.png') no-repeat;
            background-size: cover;
          }
          .contact_phone {
            background: url('./i_tel_01.png') no-repeat 0 .11rem;
            background-size: cover;
            margin-right: 1.5rem;
          }
        }
      }
    }
    .movie_cnt {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      padding-left: 0;
      position: relative;
      margin-right:1rem;
      .movie_name {
        font-size: 1.6rem;
        font-weight: bold;
      }
      .movie_info{
        color: #777;
        font-size: 1.3rem;
        margin-top:.6rem;
        .movie_info_time {
          color: #ff8600;
          font-size: 1.3rem;
        }
      }
      .toDetail{
        width: 1.4rem;
        height: 2rem;
        position: absolute;
        right:0;
        top:1.4rem;
        padding: 1rem;
        background: url('./i-tmore.png') no-repeat center;
        background-size: auto .8rem;
        -webkit-transform: rotate(-90deg);
      }

    }
    .adv_bar{
      height:5rem;
      width: 100%;
      padding: 1.5rem;
      .pic{
        display: inline-block;
        width: 3rem;
        height: 5rem;
        background:url('./icon_light.png') no-repeat center center;
        background-size: 2.5rem auto;
        vertical-align: middle;
      }
      .txt{
        vertical-align: middle;
        line-height: 1.5;
        font-style: normal;
        font-size: 1.2rem;
        color: #f94931;
      }
      .download{
        width: 7rem;
        height: 2.5rem;
        margin-left: 1.4rem;
        color: #f34546;
        border: 1px solid #f34546;
        font-size: 1.1rem;
        font-weight:bold;
        border-radius: 1.5rem;
        display: inline-block;
        text-align: center;
        line-height: 2.5rem;
      }
    }
  }
</style>
