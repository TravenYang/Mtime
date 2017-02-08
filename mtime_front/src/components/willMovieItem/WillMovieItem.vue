<template>
  <div class="willMovie_item">
    <div class="movie_cnt" v-if="movie">
      <span class="movie_day">{{movie.playMonth}}{{movie.playDay}}</span>
      <div class="most_movie">
        <a class="movie_image">
          <img :src="url+movie.movieInfoImage">
        </a>
        <div class="movie_info">
          <a class="movie_title">{{movie.movieName}}</a>
          <div class="movie_people_cnt">
            <div class="movie_want_people" v-if="movie.peoplenumber">
              <i>{{movie.peoplenumber}}</i>
              人想看 - {{movie.mvType}}
            </div>
            <div class="movie_director">导演：<i>{{movie.dirctor}}</i></div>
            <div class="movie_actor">演员：<i>{{movie.acotr}}</i></div>
          </div>
          <div class="movie_btn" @click="gotoTicket(movie.movieId)">
            <a class="movie_btn_pre">超前预售</a>
            <a class="movie_btn_pre video">预告片</a>
          </div>
        </div>
      </div>
    </div>


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
    props: {
      movie: {
        type: null
      }
    },
    methods:{
      gotoTicket(movieId){
        let _this = this;
        _this.$router.push({path:'/ticket', query:{movieId:movieId}});
      }
  }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/rem";

  .willMovie_item {
    display: flex;
    flex-direction: column;
    .movie_cnt {
      padding: 1.5rem 0;
      position: relative;
      .movie_day {
        font-size: 1.4rem;
        color: #777;
        position: absolute;
        left: 0;
        top: 10px/$ppr;
        background: #fff;
        padding-right: 6px/$ppr;
      }
    }
    .most_want {
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.1;
      & > b {
        font-weight: bold;
        color: #999;
      }
    }
    .most_movie {
      border: 1px solid #bbb;
      border-left: none;
      display: flex;
      flex-direction: row;
      padding: 1.5rem 1.5rem 1.5rem 0;
      .movie_image {
        img {
          width: 8.5rem;
          height: 12.75rem;
        }
      }
      .movie_info {
        flex: 1;
        margin-left: 1.5rem;
        .movie_title {
          font-size: 1.5rem;
          color: #333;
          font-weight: bold;
        }
        .movie_people_cnt {
          min-height: 92px/$ppr;
          .movie_want_people {
            padding-top: 1.1rem;
            font-size: 1.2rem;
            line-height: 1.65;
            i {
              color: #ff8600;
              font-style: normal;
            }
          }
        }
        .movie_director, .movie_actor {
          padding-top: .1rem;
          font-size: 1.2rem;
          line-height: 1.65;
          i {
            font-style: normal;
          }
        }
        .movie_btn {
          display: flex;
          margin-top: .7rem;
          .movie_btn_pre {
            margin-right: .8rem;
            background: #ff8600;
            color: #fff;
            border: 1px solid #ff8600;
            border-radius: 40rem;
            padding: .4rem;
            width: 7rem;
            height: 21px/$ppr;
            line-height: 21px/$ppr;
            text-align: center;
            font-size: 1.4rem;
            &.video {
              border: 1px solid #659c0d;
              color: #659c0d;
              background: #fff;
            }
          }
        }
      }
    }

  }
</style>
