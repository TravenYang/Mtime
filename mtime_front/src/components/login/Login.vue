<template>
  <div class="login">
    <div class="login_page" v-show="!getNickName">
      <div class="login_box">
        <div class="login_user">
          <i class="login_user_img"></i>
          <input class="login_user_name" name="account" type="txt" v-model="account" placeholder="登录邮箱/手机号码">
          <a class="clear_user_name" @click="clearAccount"></a>
        </div>
        <div class="login_nickname" v-if="register">
          <i class="login_nickname_img"></i>
          <input class="login_nickname_name" name="nickname" type="text" v-model="nickname" placeholder="请输入昵称">
          <a class="clear_user_name" @click="clearNickName"></a>
        </div>
        <div class="login_psd">
          <i class="login_psd_img"></i>
          <input class="login_psd_name" id="account" name="psd" type="password" v-model="pwd" placeholder="请输入密码">
          <a class="show_psd_name" @click="showPwd">显示密码</a>
        </div>
      </div>
      <div class="operation_cnt">
        <div class="login_confirm" @click="toConfirm">{{btnInfo}}</div>
        <div class="login_toregister">
          <div class="register" @click="toRegister">{{registerInfo}}</div>
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
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex';
  import qs from 'qs';
  export default{
    mounted(){
      this.hideNavAndSearch(true);
    },
    computed: {
      ...mapGetters([
        'getAccount',
        'getNickName'
      ])
    },
    data(){
      return {
        account: '',
        pwd: '',
        nickname: '',
        showPwdVal: false,
        register: false,
        btnInfo: '登录',
        registerInfo:'免费注册'
      }
    },
    methods: {
      ...mapActions([
        'hideNavAndSearch',
        'saveNickName',
        'saveAccount'
      ]),
      clearAccount(){
        this.account = '';
      },
      clearNickName(){
        this.nickname = '';
      },
      showPwd(e){
        this.showPwdVal = !this.showPwdVal;
        if (this.showPwdVal) {
          e.target.innerHTML = '隐藏密码';
          document.getElementById('account').type = 'text';
        } else {
          e.target.innerHTML = '显示密码';
          document.getElementById('account').type = 'password';
        }
      },
      toRegister(){
        let _this = this;
        _this.register = !_this.register;
        _this.btnInfo = _this.register ? '注册' : '登录';
        _this.registerInfo = _this.register?'已有账号,直接登录':'免费注册';
      },
      toConfirm(){
        let _this = this;
        if(!_this.register){
           _this.login();
        }else{
          _this.doRegister();
        }
      },
      login(){
        let _this = this;
        if(_this.account && _this.pwd){
          _this.$http.post('/mtime/login', qs.stringify({
            account: _this.account,
            pwd: _this.pwd
          })).then(function (res) {
            let userInfo = res.data;
            if (userInfo.status == false) {
              alert(userInfo.msg);
            } else {
              alert('登录成功');
              _this.saveNickName(userInfo['name']);
              _this.saveAccount(userInfo['account']);
            }
            console.log('userInfo', userInfo);
          }).catch(function(err){
            console.log('err login',err);
          });
        }else{
          alert('用户名、密码不能为空');
        }
      },
      doRegister(){
        let _this = this;
        if(_this.account && _this.pwd && _this.nickname){
          let _this = this;
          _this.$http.post('/mtime/register', qs.stringify({
            account: _this.account,
            name: _this.nickname,
            pwd: _this.pwd
          })).then(function (res) {
            let registerInfo = res.data;
            console.log('userInfo', registerInfo);
            if(registerInfo.status){
              alert('注册成功');
            }else{
              alert(registerInfo.msg);
            }
          }).catch(function(err){
            console.log('err login',err);
          });
        }else{
          alert('用户名、昵称、密码不能为空');
        }
      }
    }
  };
</script>

<style lang="scss">
  @import "../../assets/scss/rem";
  .login {
    .login_page {
      background: #F6F6F6;
      height: 600px/$ppr;
      .login_box {
        padding: 0 1.5rem;
        background: #fff;
        box-shadow: 0 3px 3px rgba(51, 51, 51, 0.1);
        .login_user, .login_psd, .login_nickname {
          background: #fff;
          height: 3rem;
          display: flex;
          border-bottom: 1px solid #d8d8d8;
          padding: 1rem 0;
          align-items: center;
          .login_user_img, .login_psd_img, .login_nickname_img {
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
          .login_nickname_img {
            background: url("./nickname.png") no-repeat -.2rem;
            background-size: cover;
          }
          .login_user_name, .login_psd_name, .login_nickname_name {
            font-size: 1.4rem;
            height: 2rem;
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
        .login_psd {
          border: none;
        }
      }
      .operation_cnt {
        padding: 1.5rem;
        .login_confirm {
          margin-top: .5rem;
          padding: 1.15rem 0;
          background: #1e7dd7;
          border: 1px solid #1e7dd7;
          border-radius: 40rem;
          text-align: center;
          font-size: 1.8em;
          color: #fff;
        }
        .login_toregister {
          display: flex;
          .register, .findpsd {
            width: 50%;
            line-height: 3.5rem;
            font-size: 1.2rem;
            color: #1e7dd7;
            font-weight: bold;
          }
          .findpsd {
            text-align: right;
            font-weight: normal;
            color: #777;
          }
        }
        .login_other {
          margin-top: 1.3rem;
          border-top: 1px solid #d8d8d8;
        }
        .login_other_cnt {
          text-align: center;
          margin-top: -0.7rem;
          margin-bottom: 2rem;
          .login_other_txt {
            font-size: 1.2rem;
            color: #999;
            padding: 0 .5rem;
            background: #f6f6f6;
          }
        }
        .login_other_type {
          display: flex;
          justify-content: center;
          .login_weibo, .login_qq {
            display: block;
            width: 5.5rem;
            height: 5.5rem;
            background: url("./o_qq.png") no-repeat;
            background-size: cover;
          }
          .login_qq {
            background: url("./o_sina.png") no-repeat;
            background-size: cover;
            margin-left: 3rem;
          }
        }
      }
    }
  }
</style>
