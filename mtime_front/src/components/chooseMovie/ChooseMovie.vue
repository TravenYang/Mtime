<template>
  <div class="chooseMovie">
    <div class="chooseMovie_cnt">
      <div class="header">
        <div class="back" @click='backToHome'></div>
        <div class="play_time">影片场次</div>
        <div class="share"></div>
      </div>
      <div class="scroll_wrap" id="scroll_wrap">
        <div class="wrap">
          <div class="cinima">
            <div class="cinima_left">
              <b class="cinima_name">{{cinemaName}}</b>
              <div class="cinima_service">
                <i class="cinima_service_01"></i>
                <i class="cinima_service_02"></i>
                <i class="cinima_service_03"></i>
                <i class="cinima_service_04"></i>
                <i class="cinima_service_05"></i>
                <i class="cinima_service_06"></i>
              </div>
            </div>
            <div class="contact">
              <div>
                <div class="contact_phone"></div>
              </div>
              <div>
                <div class="contact_location"></div>
              </div>
            </div>
          </div>

          <div class="movie_pic_cinema swiper-container-movie" style="overflow:hidden;">
            <div class="loop_btn prev"></div>
            <div class="loop_btn next"></div>
            <div class="swiper-wrapper">
              <a class="movie_item_cinema swiper-slide" v-for="movieData in movie">
                <div class="movie_item_pic_cinema">
                  <img class="img_cinema" :src="url+movieData.movieInfoImage">
                  <span class="score_cinema">{{movieData.score}}</span>
                </div>
                <h1 class="title_cinema">{{movieData.movieName}}</h1>
              </a>
            </div>
          </div>


          <div class="movie_cnt" v-if="currentMovie">
            <div class="movie_name">{{currentMovie.movieName}}</div>
            <div class="movie_info">
              <span class="movie_info_time" v-if="currentMovie.willtosell"> 明天上映-</span>

              <span class="movie_info_type">{{currentMovie.duringTime}} - {{currentMovie.mvType}}</span>
            </div>
            <div class="toDetail" @click="gotoMovie"></div>
          </div>
          <div class="adv_bar">
            <span class="pic"></span>
            <span class="txt">用时光网App购票，更优惠！</span>
            <span class="download">立即下载</span>
          </div>

          <router-link to="/ticket/choose_movie/choose_seat" v-for="cinemaTime in time">
            <div class="ticket_info">
              <div class="ticket_item">
                <div class="ticket_item_1">
                  <div class="start">{{cinemaTime.start}}</div>
                  <div class="end">{{cinemaTime.end}}散场</div>
                </div>
                <div class="ticket_item_2">
                  <div class="threed">{{cinemaTime.type}}</div>
                  <div class="place">{{cinemaTime.place}}</div>
                </div>
                <div class="ticket_item_3">
                  <div class="ori_price">￥{{cinemaTime.nowPrice}}</div>
                  <div class="old_price">￥{{cinemaTime.oldPrice}}</div>
                </div>
                <div class="purchase">购票</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <loading v-show="loading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import IScroll from 'IScroll';
  import Swiper from 'assets/js/swiper-3.4.1.min.js'
  import {mapGetters,mapActions} from 'vuex';
  import loading from 'components/loading/Loading'
  export default{
    computed: {
      ...mapGetters([
        'url',
        'showHeadAdvVal'
      ]),
      cinemaName(){
        return this.$route.query.name;
      }
    },
    components:{
      loading
    },
    data(){
      return {
        time: '',
        movie: '',
        currentMovie: '',
        movieId: '',
        myscroll: '',
        loading:true
      }
    },
    mounted(){
      this.myscroll = new IScroll('.scroll_wrap', {
        mouseWheel: true,
        click: true
      });
      let _this = this;
      this.showHeadAdv();

      _this.loopMovie = new Swiper('.swiper-container-movie', {
        observer: true,
        slidesPerView: 3,
        centeredSlides: true,
        direction: 'horizontal',
        prevButton: '.prev',
        nextButton: '.next',
        effect: 'coverflow',
        coverflow: {
          depth: 250
        },
        onInit: function (swiper) {
          let idx = swiper.activeIndex;
          _this.fetchMovie(initData);
          function initData() {
            _this.currentMovie = _this.movie[idx];
            _this.movieId = _this.currentMovie.movieId;
            _this.fetchTime(_this.movieId);
          }
        },
        onTransitionEnd: function (swiper) {
          let idx = swiper.activeIndex;
          _this.currentMovie = _this.movie[idx]
          _this.movieId = _this.currentMovie.movieId;
          _this.fetchTime(_this.movieId);
        }
      });
    },
    methods: {
      ...mapActions([
        'hideNavAndSearch',
        'showNavAndSearch',
        'showHeadAdv'
      ]),
      backToHome(){
        this.$router.push('/ticket');
      },
      fetchTime(id){
        let _this = this;
        _this.$http.get('/mtime/list_movie_time/', {
          params: {
            movieId: id
          }
        }).then(function (res) {
          _this.time = res.data;
          _this.loading = false;
          setTimeout(function () {
            _this.myscroll.refresh();
          }, 0);
        }).catch(function (err) {
          console.log('err time', err);
        });
      },
      fetchMovie(callback){
        let _this = this;
        _this.$http.get('/mtime/list_home/').then(function (res) {
          _this.movie = res.data;
          if (callback) {
            callback();
          }
          setTimeout(function () {
            _this.myscroll.refresh();
          }, 0);
        }).catch(function (err) {
          console.log('err time', err);
        });
      },
      gotoMovie(){
        let _this = this;
        this.$router.push({path:'/home_movie/movie_detail', query:{movieId:_this.movieId}})
      }
    },
  };
</script>

<style lang="scss">
  @import "../../assets/scss/rem";

  .chooseMovie {
    .chooseMovie_cnt {
      display: flex;
      flex-direction: column;
      height: 100%;

      .scroll_wrap {
        height: 610px/$ppr;
        /*flex:1;*/
        overflow: hidden;
        .wrap{
          padding-bottom: 100px/$ppr;
        }
      }
      .movie_pic_cinema {
        background: #828282;
        align-items: center;
        height: 16rem;
        position: relative;
        .loop_btn {
          position: absolute;
          top: 50%;
          z-index: 100;
          transform: translateY(-50%);
          width: 9rem;
          height: 14rem;
          &.prev {
            left: .7rem;
          }
          &.next {
            right: .6rem;
          }
        }
        .movie_item_cinema {
          width: 25%;
          margin-top: .55rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .title_cinema {
            padding: .5rem 0 0;
            width: 100%;
            text-align: center;
            /*font-size: 1.4rem;*/
            line-height: 1.2;
            color: #fff;
          }
          .movie_item_pic_cinema {
            position: relative;
            width: 7.5rem;
            height: 10.5rem;
            text-align: center;
            display: flex;
            align-items: center;
            .img_cinema {
              width: 100%;
              height: 100%;
              border: 1px solid #ddd;
              margin: 0 auto;
            }
            .score_cinema {
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
      .header {
        display: flex;
        background-color: #1C2635;
        height: 4.4rem;
        align-items: center;
        .play_time {
          color: #fff;
          flex: 3;
          text-align: center;
          font-size: 1.8rem;
        }
        .back, .share {
          width: 5.3rem;
          height: 4.4rem;
          background: url('./h_btn_back.png') no-repeat center;
          background-size: auto 1.8rem;
        }
        .share {
          background: url('./i_h_share.png') no-repeat center;
          background-size: auto 2.2rem;
        }
      }
      .cinima {
        display: flex;
        padding: 1.5rem;
        .cinima_left {
          flex: 1;
          display: flex;
          flex-direction: column;
          .cinima_name {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .cinima_service {
            i {
              display: inline-block;
              width: 1.8rem;
              height: 1.8rem;
              margin-right: .5rem;
              &.cinima_service_01 {
                background: url('./i_cine_01.png') no-repeat;
                background-size: cover;
              }
              &.cinima_service_02 {
                background: url('./i_cine_10.png') no-repeat;
                background-size: cover;
              }
              &.cinima_service_03 {
                background: url('./is_cine_02.png') no-repeat;
                background-size: cover;
              }
              &.cinima_service_04 {
                background: url('./is_cine_04.png') no-repeat;
                background-size: cover;
              }
              &.cinima_service_05 {
                background: url('./is_cine_05.png') no-repeat;
                background-size: cover;
              }
              &.cinima_service_06 {
                background: url('./is_cine_06.png') no-repeat;
                background-size: cover;
              }
            }

          }
        }
        .contact {
          display: flex;
          align-items: center;
          & > div {
            border-left: 1px solid #D8D8D8;
            padding-left: 1rem;
            .contact_phone, .contact_location {
              height: 2.2rem;
              width: 1.7rem;
              line-height: 2.2rem;
              background: url('./i_address_01.png') no-repeat;
              background-size: cover;
            }
            .contact_phone {
              background: url('./i_tel_01.png') no-repeat 0 .11rem;
              background-size: cover;
              margin-right: 1.5rem;
            }
          }
        }
      }
      .movie_cnt {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
        padding-left: 0;
        position: relative;
        margin-right: 1rem;
        .movie_name {
          font-size: 1.6rem;
          font-weight: bold;
        }
        .movie_info {
          color: #777;
          font-size: 1.3rem;
          margin-top: .6rem;
          .movie_info_time {
            color: #ff8600;
            font-size: 1.3rem;
          }
        }
        .toDetail {
          width: 1.4rem;
          height: 2rem;
          position: absolute;
          right: 0;
          top: 1.4rem;
          padding: 1rem;
          background: url('./i-tmore.png') no-repeat center;
          background-size: auto .8rem;
          -webkit-transform: rotate(-90deg);
        }

      }
      .adv_bar {
        height: 5rem;
        width: 100%;
        padding: 1.5rem;
        .pic {
          display: inline-block;
          width: 3rem;
          height: 5rem;
          background: url('./icon_light.png') no-repeat center center;
          background-size: 2.5rem auto;
          vertical-align: middle;
        }
        .txt {
          vertical-align: middle;
          line-height: 1.5;
          font-style: normal;
          font-size: 1.2rem;
          color: #f94931;
        }
        .download {
          width: 7rem;
          height: 2.5rem;
          margin-left: 1.4rem;
          color: #f34546;
          border: 1px solid #f34546;
          font-size: 1.1rem;
          font-weight: bold;
          border-radius: 1.5rem;
          display: inline-block;
          text-align: center;
          line-height: 2.5rem;
        }
      }
      .ticket_info {
        display: flex;
        flex-direction: column;
        .ticket_item {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 1.5rem;
          .ticket_item_1 {
            text-align: center;
            .start {
              font-size: 2.1rem;
              font-weight: bold;
              margin-bottom: .4rem;
            }
            .end {
              font-size: 1.2rem;
              color: #777;
            }
          }
          .ticket_item_2 {
            font-size: 1.3rem;
            text-align: center;
            color: #575757;
            width: 6rem;
            .threed {
              margin-bottom: .4rem;
            }
          }
          .ticket_item_3 {
            text-align: center;
            .ori_price {
              font-size: 1.6rem;
              color: #ff8600;
              font-weight: bold;
              margin-bottom: .4rem;
            }
            .old_price {
              font-size: 1.2em;
              color: #777;
              font-weight: bold;
              text-decoration: line-through;
            }
          }
          .purchase {
            min-width: 7.5rem;
            background: #ff8600;
            color: #fff;
            border: 1px solid #ff8600;
            padding: .65rem 0;
            border-radius: 40rem;
            text-align: center;
          }
        }
      }
    }

  }
</style>
