<template>
  <div class="movie_pic">
    <router-link to="/home_movie/movie_detail" v-for="item in hotMovie" class="movie_item">
      <div class="movie_item_pic" @click='hideNavAndSearch'>
        <img class="img" :src="url+item.movieInfoImage">
        <span v-show="item.score" class="score">{{item.score | toDecimal1}}</span>
      </div>
      <h1 class="title">{{item.movieName}}</h1>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex';
  export default{
    computed: {
      ...mapGetters([
        'url'
      ])
    },
    methods:{
      ...mapActions([
        'hideNavAndSearch'
      ])
    },
    filters: {
      toDecimal1(val){
        let s = val.toString();
        let rs = s.indexOf('.');
        if (rs < 0) {
          s += '.0';
        }
        return s
      }
    },
    data(){
      return {}
    },
    props: {
      hotMovie: {
        type: null
      }
    }
  };
</script>

<style lang="scss">
  .movie_pic {
    display: flex;
    flex-wrap: wrap;

    .movie_item {
      width: 25%;
      .title {
        padding: .5rem 0 0;
        margin-bottom: 1rem;
        height: 3.8rem;
        width: 100%;
        text-align: center;
        font-size: 1.4rem;
        line-height: 1.2;
        color: #333;
      }
      .movie_item_pic {
        position: relative;
        width: 6.5rem;
        height: 9.8rem;
        text-align: center;
        .img {
          width: 100%;
          height: 100%;
          border: 1px solid #ddd;
          margin: 0 auto;
        }
        .score {
          position: absolute;
          right: .3rem;
          top: .3rem;
          width: 2rem;
          height: 1.8rem;
          background: #659d0e;
          color: #fff;
          line-height: 1.8rem;
          text-align: center;
        }
      }
    }

  }
</style>
