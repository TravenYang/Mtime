<template>

  <div class="out_wraper">
    <transition enter-active-class="bounceInRight" leave-active-class="zoomOutRight">
      <div v-show="show" class="willMovie animated">
        <div class="will_wrap" v-if="movieData">
          <div class="most_want">最受关注<b></b></div>
          <WillMovieItem :movie="movieData[0]"></WillMovieItem>
          <LoopAdv></LoopAdv>
          <div class="most_want">即将上映<b></b></div>
          <WillMovieItem v-for="movie in willShow" :movie="movie"></WillMovieItem>
        </div>
      </div>
    </transition>
    <loading v-show="loading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import WillMovieItem from 'components/willMovieItem/WillMovieItem';
  import LoopAdv from 'components/loopAdv/LoopAdv';
  import {mapGetters,mapActions} from 'vuex';
  import IScroll from 'IScroll';
  import upDown from '../../assets/js/upDown';
  import loading from 'components/loading/Loading'
  export default{
    computed: {
      ...mapGetters([
        'url',
        'showHeadAdvVal'
      ]),
      willShow(){
        return this.movieData.slice(1);
      }
    },
    data(){
      return {
        loading: true,
        show:false,
        movieData: [],
        myscroll: '',
        wrapperHeight: '',
        page: 0,
        number: 6,

      }
    },
    watch: {
      showHeadAdvVal(){
        this.myscroll.refresh();
        console.log('adv改变了');
      }
    },
    mounted(){
      this.chooseMovieType(false);
      let _this = this;
      _this.myscroll = new IScroll('.willMovie', {
        click: true,
        probeType: 3,
        mouseWheel: true
      });
      _this.fetchMovie();
      upDown.fetchMore(_this, _this.fetchMovie, _this.fetchMovie);

    },
    methods: {
      ...mapActions([
        'chooseMovieType'
      ]),
      fetchMovie(){
        console.log(222222);
        let _this = this;
        _this.loading = true;
        this.$http.get('/mtime/list_home', {
          params: {
            page: _this.page || '',
            number: _this.number || '',
            type: 'will'
          }
        }).then(function (res) {
          //判断服务器返回数据，是否存在,处理数据
          if (res.data[0] != undefined) {
            //page=0 就为下拉刷新
            if (_this.page == 0) {
              console.log('wei 0');
              _this.movieData = res.data;
            } else {
              console.log('buwei0');
              let data = _this.movieData.concat(res.data);
              _this.movieData = data;
            }
            _this.page++;
          } else {
            console.log('没有更多了');
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
    },
    components: {
      WillMovieItem,
      LoopAdv,
      loading
    }
  };
</script>

<style lang="scss">
  @import "../../assets/scss/rem";
  @import   '../../assets/scss/animate.css';
  .willMovie {
    padding: 1.5rem;
    .will_wrap {
    }
    .loopAdv {
      margin-bottom: 1.5rem;
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
  }
</style>
