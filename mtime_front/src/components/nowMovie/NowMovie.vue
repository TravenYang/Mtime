<template>

    <div class="out_wraper">
      <transition enter-active-class="bounceInRight" leave-active-class="zoomOutRight">
      <div v-show="show" class="now_movie_cnt animated">
        <div class="nowMovie">
          <div class="nowMovie_item" v-for="movie in movieData">
            <a class="image">
              <img :src="url+movie.movieInfoImage">
            </a>
            <div class="middle">
              <div class="middle_desc">
                <h1 class="middle_name">
                  <a class="title">{{movie.movieName}}</a>
                  <span class="score" v-if="movie.score">{{movie.score}}</span>
                </h1>
                <h2 class="desc" v-if="movie.desc">
                  <i></i>
                  <span>{{movie.desc}}</span>
                </h2>
                <div>
                  <i class="movie_01" v-if="movie.threeD"></i>
                  <i class="movie_01 movie_01_tv" v-if="movie.max"></i>
                </div>
              </div>
              <div class="cinema">
                <span>{{movie.playNumber}}</span>
                <a class="purchase" @click="gotoTicket(movie.movieId)">{{movie.purchaseType}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>
      <loading v-show="loading"></loading>
    </div>

</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex';
  import IScroll from 'IScroll';
  import upDown from '../../assets/js/upDown';
  import loading from 'components/loading/Loading'
  export default{
    computed: {
      ...mapGetters([
        'url',
        'showHeadAdvVal'
      ])
    },
    components:{
      loading
    },
    data(){
      return {
        loading: true,
        show:false,
        movieData: [],
        myscroll:'',
        wrapperHeight: '',
        page:0,
        number:6
      }
    },
    watch:{
      showHeadAdvVal(){
        this.myscroll.refresh();
      }
    },
    mounted(){
      let _this = this;
      _this.myscroll = new IScroll('.now_movie_cnt',{
        click:true,
        probeType: 3,
        mouseWheel: true
      });
      _this.chooseMovieType(true);
      _this.fetchMovie();

      //下拉刷新，上拉加载
      upDown.fetchMore(_this,_this.fetchMovie,_this.fetchMovie);

    },
    methods: {
      ...mapActions([
        'chooseMovieType'
      ]),
      gotoTicket(movieId){
        let _this = this;
        _this.$router.push({path:'/ticket', query:{movieId:movieId}});
      },
      //获取影片列表
      fetchMovie(){
        let _this = this;
        _this.loading = true;
        this.$http.get('/mtime/list_home', {
          params: {
            page: _this.page || '',
            number: _this.number || ''
          }
        }).then(function (res) {
          //判断服务器返回数据，是否存在,处理数据
          if (res.data[0] != undefined) {
            //page=0 就为下拉刷新
            if(_this.page == 0){
              _this.movieData = res.data;
            }else{
              let data = _this.movieData.concat(res.data);
              _this.movieData = data;
            }
            _this.page++;
          }else{
            alert('没有更多了');
          }
          //请求结束后,页面出现，loading消失
          _this.show = true;
          _this.loading = false;
          setTimeout(function () {
            _this.myscroll.refresh();
          }, 0);
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/rem";
  @import   '../../assets/scss/animate.css';
  .out_wraper{
    display: flex;
    .now_movie_cnt{
      flex: 1;
      overflow: hidden;
      .nowMovie {
        display: flex;
        flex-direction: column;
        .nowMovie_item {
          padding: 1.5rem;
          display: flex;
          border-bottom: 1px solid #D8D8D8;
          img {
            width: 6.5rem;
            height: 9.8rem;
          }
          .middle {
            flex:1;
            margin-left: 1.5rem;
            .middle_desc {
              min-height: 6.7rem;
              h1 {
                display: flex;
                align-items: center;
                .title {
                  flex:1;
                  font-size: 1.5rem;
                  vertical-align: middle;
                }
                .score {
                  margin-left: .5rem;
                  font-size: 1.1rem;
                  background: #659d0e;
                  width: 2em;
                  height: 1.8em;
                  color: #fff;
                  display: inline-block;
                  line-height: 1.8rem;
                  text-align: center;
                }
              }
              .desc {
                color: #659d0e;
                padding-top: .5rem;
                i {
                  display: inline-block;
                  margin: -0.5rem .3rem 0 0;
                  width: 1.1rem;
                  height: .8rem;
                  background: url('./i_dot_01.png') no-repeat 0 0;
                  background-size: cover;
                }
                span {
                  width: 18rem;
                  display: inline-block;
                  vertical-align: middle;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  font-size: 1.3em;
                  line-height: 1.65;
                }
              }
              & > div {
                .movie_01 {
                  margin-top: .4rem;
                  display: inline-block;
                  width: 2rem;
                  height: 1.5rem;
                  font-style: normal;
                  background: url('./ia_cine_05.png') no-repeat 0 0;
                  background-size: cover;
                  &.movie_01_tv {
                    width: 4.4rem;
                    background: url('./ia_cine_15.png') no-repeat;
                    background-size: cover;
                  }
                }
              }
            }
            .cinema {
              font-size: 1.2rem;
              color: #999;
              line-height: 2.8rem;
              .purchase {
                font-size: 1.4rem;
                margin-left: 1rem;
                min-width: 7.4rem;
                float: right;
                background: #ff8600;
                color: #fff;
                border: 1px solid #ff8600;
                display: inline-block;
                border-radius: 40rem;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }



</style>
