<template>
  <div class="login_page">
    <div class="login_header">
      <a class="login_back"></a>
      <div class="login_logo_cnt">
        <i class="login_logo"></i>
      </div>
    </div>
    <div class="login_box">
      <div class="login_user">
        <i class="login_user_img"></i>
        <input class="login_user_name" name="name" type="txt" placeholder="登录邮箱/手机号码">
        <a class="clear_user_name"></a>
      </div>
      <div class="login_psd">
        <i class="login_psd_img"></i>
        <input class="login_psd_name" name="psd" type="txt" placeholder="密码">
        <a class="show_psd_name">显示密码</a>
      </div>
    </div>
    <div class="operation_cnt">
      <div class="login_confirm">登录</div>
      <div class="login_toregister">
        <div class="register">免费注册</div>
        <div class="findpsd">找回密码</div>
      </div>
      <div class="login_other">
        <div class="login_other_cnt">
          <span class="login_other_txt">使用第三方登录</span>
        </div>
      </div>
      <div class="login_other_type">
        <span class="login_weibo"></span>
        <span class="login_qq"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{};
</script>

<style lang="scss">
  @import "../../assets/scss/rem";
  .login_page {
    background: #F6F6F6;
    height:614px/$ppr;
    .login_header {
      display: flex;
      height: 4.4rem;
      background: #1C2635;
      .login_back {
        width: 4.4rem;
        height: 4.4rem;
        display: block;
        background: url('./h_btn_back.png') no-repeat 1.5rem center;
        background-size: auto 1.5rem;
      }
      .login_logo_cnt {
        text-align: center;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .login_logo {
          display: block;
          background: url('logo_mtime.png') no-repeat center center;
          background-size: contain;
          width: 5.6rem;
          height: 1.8rem;
          margin-right: 2.2rem;
          height: 100%;
        }
      }
    }
    .login_box {
      padding: 0 1.5rem;
      background: #fff;
      box-shadow: 0 3px 3px rgba(51,51,51,0.1);
      .login_user, .login_psd {
        background: #fff;
        height:3rem;
        display: flex;
        border-bottom: 1px solid #d8d8d8;
        padding: 1rem 0;
        align-items: center;
        .login_user_img, .login_psd_img {
          display: inline-block;
          width: 2.6rem;
          height: 2.3rem;
          background: url("./i_user.png") no-repeat;
          background-size: cover;
          margin-right: .8rem;
        }
        .login_psd_img {
          width: 3rem;
          background: url("./i_password.png") no-repeat;
          background-size: cover;
        }
        .login_user_name, .login_psd_name {
          font-size: 1.4rem;
          height: 1.4rem;
          width: 100%;
          line-height: 1.4rem;
          margin: .55rem 0;
          font-style: normal;
          outline: none;
        }
        .clear_user_name {
          display: block;
          width: 3.3rem;
          height: 3.3rem;
          background: url("./search_clear.png") no-repeat 1rem 1rem;
          background-size: 1.6rem 1.6rem;
          cursor: pointer;
        }
        .show_psd_name {
          display: inline-block;
          width: 8rem;
          font-size: 1.4em;
          color: #1e7dd7;
          cursor: pointer;
          line-height: 3.2rem;
          height: 100%;

        }
      }
      .login_psd{
        border:none;
      }
    }
    .operation_cnt{
      padding:1.5rem;
      .login_confirm{
        margin-top:.5rem;
        padding: 1.15rem 0;
        background: #1e7dd7;
        border: 1px solid #1e7dd7;
        border-radius: 40rem;
        text-align: center;
        font-size: 1.8em;
        color:#fff;
      }
      .login_toregister{
        display: flex;
        .register,.findpsd{
          width: 50%;
          line-height: 3.5rem;
          font-size: 1.4rem;
          color: #1e7dd7;
          font-weight: bold;
        }
        .findpsd{
          text-align: right;
          font-weight: normal;
          color:#777;
        }
      }
      .login_other{
        margin-top: 1.3rem;
        border-top: 1px solid #d8d8d8;
      }
      .login_other_cnt{
        text-align: center;
        margin-top: -0.7rem;
        margin-bottom: 2rem;
        .login_other_txt{
          font-size: 1.2rem;
          color: #999;
          padding: 0 .5rem;
          background: #f6f6f6;
        }
      }
      .login_other_type{
        display: flex;
        justify-content: center;
        .login_weibo,.login_qq{
          display: block;
          width: 5.5rem;
          height: 5.5rem;
          background: url("./o_qq.png") no-repeat;
          background-size: cover;
        }
        .login_qq{
          background: url("./o_sina.png") no-repeat;
          background-size: cover;
          margin-left: 3rem;
        }
      }
    }
  }
</style>
