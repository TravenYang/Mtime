<template>
  <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
    <div class="home_cnt animated" v-show="show">
      <div class="home">
        <SearchBox></SearchBox>
        <div class="home_movie">
          <TitleBar :routeTarget='hotMovieRoute' :titleName='titleBarName[0]'></TitleBar>
          <MoviePic :hotMovie="homeMovieData"></MoviePic>
        </div>
        <div class="loopAdv_container">
          <LoopAdv></LoopAdv>
        </div>
        <div class="home_movie">
          <TitleBar :routeTarget='willMovieRoute' :titleName='titleBarName[1]'></TitleBar>
          <MoviePic :hotMovie="willMovieData"></MoviePic>
        </div>
      </div>
    </div>
  </transition>

</template>

<script type="text/ecmascript-6">
  import IScroll from 'IScroll';
  import TitleBar from 'components/titleBar/TitleBar'
  import MoviePic from 'components/moviePic/MoviePic'
  import BorderBar from 'components/borderBar/BorderBar'
  import LoopAdv from 'components/loopAdv/LoopAdv'
  import News from 'components/news/News'
  import Tab from 'components/tab/Tab';
  import{mapGetters,mapActions}from 'vuex';
  import router from 'vue-router'
  import SearchBox from 'components/search/Search'
  export default{
    computed: {
      ...mapGetters([
        'url',
        'homeMovieData',
        'willMovieData',
        'showHeadAdvVal'
      ])
    },
    watch:{
      showHeadAdvVal(){
        this.myscroll.refresh();
        console.log('adv改变了');
      }
    },
    data(){
      return {
        movieData: {},
        hotMovieRoute:'/home_movie/now_movie',
        willMovieRoute:'/home_movie/will_movie',
        titleBarName:['正在热映','即将上映'],
        myscroll:'',
        show:false
      }
    },
    mounted(){
      this.show = true;
      this.myscroll = new IScroll('.home_cnt',{
        mouseWheel: true,
        click:true
      });
      this.fetchMovie();
    },
    methods: {
      ...mapActions([
        'showNavAndSearch',
        'getMovieData',
        'getWillMovieData'
      ]),
      shows(){
        this.show = !this.show;
      },
      fetchMovie(){
        let _this = this;
        //获取首页正在热映数据
        _this.$http.get('/mtime/list_home',{
          params: {
            page: 0,
            number:8
          }
        }).then(function (res) {
          _this.getMovieData(res.data);
          setTimeout(function(){
            _this.myscroll.refresh();
          },0);
        }).catch(function (err) {
          console.log('home now: ', err);
        });
        //获取首页正在热映数据
        _this.$http.get('/mtime/list_home',{
          params: {
            page: 0,
            number:8,
            type:'will'
          }
        }).then(function (res) {
          _this.getWillMovieData(res.data);
          setTimeout(function(){
            _this.myscroll.refresh();
          },0);
        }).catch(function (err) {
          console.log('home will: ', err);
        });
        ;

      }
    },
    components: {
      TitleBar,
      MoviePic,
      BorderBar,
      LoopAdv,
      News,
      Tab,
      SearchBox
    }
  };
</script>

<style lang="scss">
  @import   '../../assets/scss/animate.css';
  .home_cnt{
    .home {
      .home_movie {
        padding: .5rem 1.5rem .3rem;

      }
      .loopAdv_container {
        padding: 1.2rem 0 2rem 0;
        background: #F6F6F6;
      }
    }
  }



</style>
