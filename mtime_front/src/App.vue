<template>
  <div id="app">
    <HeadAdv></HeadAdv>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Tab from 'components/tab/Tab';
import HeadAdv from 'components/headAdv/HeadAdv';
export default {
  name: 'app',
  components:{
    HeadAdv,
    Tab
  }
}
</script>

<style lang='scss'>

</style>
