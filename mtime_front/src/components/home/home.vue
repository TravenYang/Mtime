<template>
  <div class="home">
    <div class="home_movie">
      <TitleBar :routeTarget='hotMovieRoute'></TitleBar>
      <MoviePic :hotMovie="movieData"></MoviePic>
      <BorderBar></BorderBar>
      <TitleBar></TitleBar>
    </div>
    <div class="loopAdv_container">
      <LoopAdv></LoopAdv>
    </div>
    <div class="home_movie">
      <TitleBar></TitleBar>
      <News></News>
    </div>
    <Tab :head="false"></Tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import TitleBar from 'components/titleBar/TitleBar'
  import MoviePic from 'components/moviePic/MoviePic'
  import BorderBar from 'components/borderBar/BorderBar'
  import LoopAdv from 'components/loopAdv/LoopAdv'
  import News from 'components/news/News'
  import Tab from 'components/tab/Tab';
  import{mapGetters}from 'vuex';
  import router from 'vue-router'
  export default{
    computed: {
      ...mapGetters([
        'url'
      ])
    },
    data(){
      return {
        movieData: {},
        hotMovieRoute:'/home_movie'
      }
    },
    mounted(){
      this.fetchMovie();
    },
    methods: {
      fetchMovie(){
        let _this = this;
        _this.$http.get('/mtime/list_home',{
          params: {
            page: 0,
            number:8
          }
        }).then(function (res) {
          _this.movieData = res.data;
        }).catch(function (err) {
          console.log('home页出错: ', err);
        });
        ;
      },
      showData(){
        console.log('this.movieData2', this.movieData);
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
