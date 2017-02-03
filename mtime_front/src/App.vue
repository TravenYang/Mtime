<template>
  <div id="app">
    <HeadAdv></HeadAdv>
    <Tab :head="true" v-show="showNavVal"></Tab>
    <SearchBox v-show="showSearchVal"></SearchBox>
      <router-view></router-view>
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
  watch:{
      $route(to){
        console.log(to);
        switch(to.path) {
          case '/home':
            this.showNavAndSearch();
           break;
           case '/home_movie/now_movie':
            this.hideNavAndSearch();
           break;
           case '/home_movie/will_movie':
            this.hideNavAndSearch();
           break;
        }
      }
  },
  methods: {
      ...mapActions([
        'showNavAndSearch',
        'hideNavAndSearch'
      ])
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
