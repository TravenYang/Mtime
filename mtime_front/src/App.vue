<template>
  <div id="app">
    <HeadAdv></HeadAdv>
    <Tab :head="true" v-show="showNavVal"></Tab>
    <!--<loading v-if="loading"></loading>-->
    <router-view class="app_content"></router-view>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import loading from 'components/loading/Loading'
import Tab from 'components/tab/Tab';
import HeadAdv from 'components/headAdv/HeadAdv';
import SearchBox from 'components/search/Search'
import {mapActions,mapGetters} from 'vuex';
export default {
  name: 'app',
  components:{
    HeadAdv,
    Tab,
    SearchBox,
    loading
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
      'showSearchVal',
      'loading'
    ])

  }
}
</script>
<style lang='scss'>
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
    & > .app_content {
      overflow: hidden;
      flex: 1;
    }
  }
</style>
