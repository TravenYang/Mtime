<template>
  <div class="ticket">
    <div v-if="getCurrentLocation.place" class="now_location">当前位置：
      <div class="now_location_name">{{getCurrentLocation.place}}</div>
    </div>

    <div class="out_wraper">
      <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
        <div v-show="show" class="scroll_wrap animated">
          <div>
            <TicketItem v-for="(item,index) in getcinemaData" :info="item" @click.native='goto(item.name)'></TicketItem>
          </div>
        </div>
      </transition>
      <loading v-show="loading"></loading>
    </div>


    <loading v-show="loading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import TicketItem from 'components/ticketItem/TicketItem';
  import gaoDeAxios from 'axios';
  import {mapGetters,mapActions} from 'vuex';
  import loading from 'components/loading/Loading'

  export default{
    components: {
      TicketItem,
      loading
    },
    methods: {
      ...mapActions([
        'hideNavAndSearch',
        'saveCinemaData',
        'saveCurrentLocation',
        'hideLoading',
        'showLoading',
        'showNavAndSearch'
      ]),
      goto(name){
        this.$router.push({path: '/ticket/choose_movie', query: {name: name}});
        this.hideNavAndSearch();
        document.body.scrollTop = 0;
      }
    },
    data(){
      return {
        myscroll: '',
        loading: true,
        show: false,
      }
    },
    computed: {
      ...mapGetters([
        'getcinemaData',
        'getCurrentLocation',
        'showHeadAdvVal'
      ])
    },
    watch: {
      showHeadAdvVal(){
        this.myscroll.refresh();
        console.log('adv改变了');
      }
    },
    mounted(){
      //key
      //35d76866a498d51fa701a70f7100099a

      let _this = this;
      _this.showNavAndSearch();
      _this.myscroll = new IScroll('.scroll_wrap', {
        mouseWheel: true,
        click: true
      });

      //判断浏览器支持
      if (window.navigator.geolocation) {
        //调用getCurrentPosition方法
        window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
          enableHighAccuracy: true
        });
      } else {
        console.log("浏览器不支持html5来获取地理位置信息");
      }
      //amap获取地址成功
      function handleSuccess(position) {
        clearTimeout(getDefaultLoacation);
        console.log('我成功了');
        //经纬度
        let lng = Math.round(position.coords.longitude * 1000000) / 1000000;
        let lat = Math.round(position.coords.latitude * 1000000) / 1000000;
        _this.getCurrentLocation.lng = lng;
        _this.getCurrentLocation.lat = lat;
        _this.saveCurrentLocation(_this.getCurrentLocation);
        let pos = lng + ',' + lat;
        //获取地名
        getPlaceName(pos);
      };

      //获取地名
      function getPlaceName(pos) {
        gaoDeAxios.get('http://restapi.amap.com/v3/geocode/regeo', {
          params: {
            output: 'json',
            location: pos,
            key: '35d76866a498d51fa701a70f7100099a',
            radius: 1000,
            extensions: 'all'
          }
        }).then(function (res) {
          if (res.data.regeocode.pois[0] == undefined) {
            defaultLoacation();
          } else {
            _this.getCurrentLocation.place = res.data.regeocode.formatted_address;
            _this.saveCurrentLocation(_this.getCurrentLocation);
            getCinema(pos);
          }
        }).catch(function (err) {
          console.log('err', err);
        });
      }

      //获取电影院信息
      function getCinema(pos) {
        gaoDeAxios.get('http://restapi.amap.com/v3/place/around', {
          params: {
            output: 'json',
            location: pos,
            key: '35d76866a498d51fa701a70f7100099a',
            extensions: 'all',
            radius: 10000,
            types: '电影院'
          }
        }).then(function (res) {
          console.log(res.data.pois);
          _this.saveCinemaData(res.data.pois);
          //请求结束后,页面出现，loading消失
          _this.show = true;
          _this.loading = false;
          setTimeout(function () {
            _this.myscroll.refresh();
          }, 0);
        }).catch(function (err) {
          console.log('err', err);
        });
      }

      //获取不到地址时,采用默认地址
      let getDefaultLoacation = setTimeout(function () {
        defaultLoacation();
      }, 3000);

      //默认地址配置获取
      function defaultLoacation() {
        console.log('浏览器未能正确定位，开启默认测试坐标（121.034372，31.137282）');
        let lng = 121.45209;
        let lat = 31.228829;
        _this.getCurrentLocation.lng = lng;
        _this.getCurrentLocation.lat = lat;
        let pos = lng + ',' + lat;
        //获取地名
        getPlaceName(pos);
      }

      //amap错误处理
      function handleError(error) {
        var result;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            result = "请打开您的定位系统";
            break;
          case error.POSITION_UNAVAILABLE:
            result = "暂时获取不到您的地点信息，请手动选择城市";
            break;
          case error.TIMEOUT:
            result = "连接超时";
            break;
          case error.UNKNOWN_ERROR:
            result = "发生了位置错误";
            break;
        }
        console.log('handelerr ticket', result);
      }
    }
  };
</script>

<style lang="scss">
  .ticket {
    display: flex;
    flex-direction: column;
    .now_location {
      padding: .8rem 1.5rem;
      border-bottom: 1px solid #D8D8D8;
      display: flex;
      line-height: 1.3rem;
      min-height: 2rem;
      font-size: 1.1rem;
      align-items: center;
      .now_location_name {
        flex: 1;
        line-height: 1.3rem;
      }
    }
    .scroll_wrap {
      overflow: hidden;
      flex: 1;
    }
  }

</style>
