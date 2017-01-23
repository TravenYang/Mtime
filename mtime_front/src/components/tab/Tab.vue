<template>
  <div :class="['tab',{foot:!head}]">
    <div class="tab-item" v-show="head">
      <router-link to="/home" class="homePic">
        <i></i>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/home">首页</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ticket">购票</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/shop" class="shop">商城
        <em v-show="head">NEW</em>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/find">发现</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/login" class="login">
        <i v-show="head"></i>
        <a v-show="!head">我的</a>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      head: {
        type: Boolean
      }
    }
  }
  ;
</script>

<style lang="scss">
  @import "../../assets/scss/rem";

  .tab {
    width: 100%;
    display: flex;
    background: #1C2635;
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        height: 4.4rem;
        line-height: 4.4rem;
        display: block;
        font-size: 1.3rem;
        color: #bbb;
      }
      .homePic, .login {
        padding: 0 10px/$ppr;
        i {
          vertical-align: middle;
          display: inline-block;
          width: 5.6rem;
          height: 1.8rem;
          background: url("logo_mtime.png") no-repeat center center;
          background-size: contain;
        }
      }
      .login i {
        width: 1.4rem;
        height: 1.8rem;
        background: url("ico_my.png") no-repeat center center;
        background-size: cover;
      }
      .shop {
        position: relative;
        em {
          position: absolute;
          width: 2.7rem;
          height: 1.1rem;
          line-height: 1.1rem;
          background: -webkit-linear-gradient(top, #ef4545, #d80808);
          right: -1.2rem;
          top: 7px/$ppr;
          font-size: 12px/$ppr;
          font-style: normal;
          border-radius: 1rem;
          overflow: hidden;
          color: #fff;
        }
      }
    }
  }
  .tab{
    &.foot{
      .tab-item{
        border-top:1px solid #F6F6F6;
        background: #fff;
        a{
          color:#0074C5;
        }
      }
    }
  }
</style>
