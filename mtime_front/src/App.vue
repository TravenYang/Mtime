<template>
  <div id="app">
    <HeadAdv></HeadAdv>
    <Tab :head="true" v-show="showNavVal"></Tab>
    <SearchBox v-show="showSearchVal"></SearchBox>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Tab from 'components/tab/Tab';
import HeadAdv from 'components/headAdv/HeadAdv';
import SearchBox from 'components/search/Search'
import {mapActions,mapGetters} from 'vuex';
export default {
  name: 'app',
  components:{
    HeadAdv,
    Tab,
    SearchBox
  },
  computed:{
    ...mapGetters([
      'showNavVal',
      'showSearchVal'
    ])
  }
}

</script>

<style lang='scss'>

</style>
