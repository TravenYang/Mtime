<template>
  <div id="app">
    <HeadAdv></HeadAdv>
    <Tab></Tab>
    <SearchBox></SearchBox>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Tab from 'components/tab/Tab';
import HeadAdv from 'components/headAdv/HeadAdv';
import SearchBox from 'components/search/Search'
export default {
  name: 'app',
  components:{
    HeadAdv,
    Tab,
    SearchBox
  }
}

</script>

<style lang='scss'>

</style>
