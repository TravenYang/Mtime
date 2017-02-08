<template>
  <div class="willMovie">
    <div class="will_wrap">
      <div class="most_want">最受关注<b> ( 10 部 )</b></div>
      <WillMovieItem></WillMovieItem>
      <LoopAdv></LoopAdv>
      <div class="most_want">即将上映<b> ( 36 部 )</b></div>
      <WillMovieItem></WillMovieItem>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import WillMovieItem from 'components/willMovieItem/WillMovieItem';
  import LoopAdv from 'components/loopAdv/LoopAdv';
  import {mapGetters,mapActions} from 'vuex';
  import IScroll from 'IScroll';
  import upDown from '../../assets/js/upDown';
  export default{
    computed: {
      ...mapGetters([
        'url',
        'showHeadAdvVal'
      ])
    },
    data(){
      return {
        loading: true,
        movieData: {},
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
            type:'will'
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
          }
          setTimeout(function () {
            _this.myscroll.refresh();
          }, 0);
        })
      }
    },
    components: {
      WillMovieItem,
      LoopAdv
    }
  };
</script>

<style lang="scss">
  @import "../../assets/scss/rem";

  .willMovie {
    padding: 1.5rem;
    border: 1px solid red;
    .will_wrap {
      border: 1px solid blue;
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
