<template>
  <div class="home">
    <div class="home_movie">
      <TitleBar></TitleBar>
      <MoviePic></MoviePic>
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
  import{mapGetters}from 'vuex';
  import TitleBar from 'components/titleBar/TitleBar'
  import MoviePic from 'components/moviePic/MoviePic'
  import BorderBar from 'components/borderBar/BorderBar'
  import LoopAdv from 'components/loopAdv/LoopAdv'
  import News from 'components/news/News'
  import Tab from 'components/tab/Tab';
  export default{
    computed: {
      ...mapGetters([
        'url'
      ])
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
    .loopAdv_container{
      padding:1.2rem 0 2rem 0;
      background:#F6F6F6;
    }
  }


</style>
