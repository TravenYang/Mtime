<template>
  <router-link :to="{path:routeTarget}" class="title_bar">
      <div class="title">正在热映(51部)</div>
      <div class="title_icon"></div>
  </router-link>
</template>

<script type="text/ecmascript-6">
export default{
  props:{
    routeTarget:{
      type:null
    }
  }
};
</script>

<style lang="scss">
  .title_bar{
    display: flex;
    color:#000;
    .title{
      width:100%;
      height:3.6rem;
      line-height:3.6rem;
      font-size:1.8rem;
      font-weight: bold;
    }
    .title_icon{
      width:1.4rem;
      background:url('i-tmore.png') no-repeat center center;
      background-size: auto .8rem;
      -webkit-transform: rotate(-90deg);
    }
  }
</style>
