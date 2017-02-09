<template>

  <div class="home_cnt">
    <transition enter-active-class="bounceInRight" leave-active-class="zoomOutRight">
      <div v-show="show" class="home animated">
        <SearchBox :textType="textType"></SearchBox>
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
    </transition>
    <loading v-show="loading"></loading>
  </div>


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
  import loading from 'components/loading/Loading'
  export default{
    computed: {
      ...mapGetters([
        'url',
        'homeMovieData',
        'willMovieData',
        'showHeadAdvVal'
      ])
    },
    watch: {
      showHeadAdvVal(){
        this.myscroll.refresh();
      }
    },
    data(){
      return {
        movieData: {},
        hotMovieRoute: '/home_movie/now_movie',
        willMovieRoute: '/home_movie/will_movie',
        titleBarName: ['正在热映', '即将上映'],
        myscroll: '',
        show: false,
        loading: true,
        textType: '影片/影院/影人，任你搜'
      }
    },
    mounted(){
      this.myscroll = new IScroll('.home_cnt', {
        mouseWheel: true,
        click: true
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
        _this.$http.get('/mtime/list_home', {
          params: {
            page: 0,
            number: 8
          }
        }).then(function (res) {
          _this.getMovieData(res.data);
          setTimeout(function () {
            _this.myscroll.refresh();
          }, 0);
          //获取首页正在热映数据
          _this.$http.get('/mtime/list_home', {
            params: {
              page: 0,
              number: 8,
              type: 'will'
            }
          }).then(function (res) {
            _this.getWillMovieData(res.data);
            _this.show = true;
            _this.loading = false;
            setTimeout(function () {
              _this.myscroll.refresh();
            }, 0);
          }).catch(function (err) {
            console.log('home will: ', err);
          });
        }).catch(function (err) {
          console.log('home now: ', err);
        });
      }
    },
    components: {
      TitleBar,
      MoviePic,
      BorderBar,
      LoopAdv,
      News,
      Tab,
      SearchBox,
      loading
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/animate.css';

  .home_cnt {
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
