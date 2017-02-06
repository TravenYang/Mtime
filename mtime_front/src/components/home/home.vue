<template>
  <div class="home_cnt">
    <div class="home">
      <div class="home_movie">
        <TitleBar :routeTarget='hotMovieRoute' :titleName='titleBarName[0]'></TitleBar>
        <MoviePic :hotMovie="homeMovieData"></MoviePic>
        <BorderBar></BorderBar>
        <TitleBar :titleName='titleBarName[1]'></TitleBar>
      </div>
      <div class="loopAdv_container">
        <LoopAdv></LoopAdv>
      </div>
      <div class="home_movie">
        <TitleBar :titleName='titleBarName[2]'></TitleBar>
        <News></News>
      </div>
      <Tab :head="false"></Tab>
    </div>
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
  export default{
    computed: {
      ...mapGetters([
        'url',
        'homeMovieData'
      ])
    },
    data(){
      return {
        movieData: {},
        hotMovieRoute:'/home_movie/now_movie',
        titleBarName:['正在热映','即将上映','今日热点'],
        myscroll:''
      }
    },
    mounted(){
      this.myscroll = new IScroll('.home_cnt');
      this.fetchMovie();
    },
    methods: {
      ...mapActions([
        'showNavAndSearch',
        'getMovieData'
      ]),
      fetchMovie(){
        let _this = this;
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
          console.log('home页出错: ', err);
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
      Tab
    }
  };
</script>

<style lang="scss">
  .home_cnt{
    height:400px;
    z-index: 0;
  }
  .home {
    .home_movie {
      padding: .5rem 1.5rem .3rem;

    }
    .loopAdv_container {
      padding: 1.2rem 0 2rem 0;
      background: #F6F6F6;
    }
  }


</style>
