<template>
  <div class="ticket">
    <div v-if="getCurrentLocation.place">当前位置：{{getCurrentLocation.place}}</div>
      <TicketItem v-for="(item,index) in getcinemaData" :info="item" @click.native='goto(item.name)'></TicketItem>
  </div>
</template>

<script type="text/ecmascript-6">
  import TicketItem from 'components/ticketItem/TicketItem';
  import gaoDeAxios from 'axios';
  import {mapGetters,mapActions} from 'vuex';
  export default{
    components: {
      TicketItem
    },
    methods: {
      ...mapActions([
        'hideNavAndSearch',
        'saveCinemaData',
        'saveCurrentLocation'
      ]),
      goto(name){
        this.$router.push({path:'/ticket/choose_movie',query:{name:name}});
        this.hideNavAndSearch();
        document.body.scrollTop = 0;
      }
    },
    computed:{
      ...mapGetters([
        'getcinemaData',
        'getCurrentLocation'
      ])
    },
    mounted(){
      //key
      //35d76866a498d51fa701a70f7100099a
      //判断浏览器支持
      let _this = this;
      if (window.navigator.geolocation) {
        //调用getCurrentPosition方法
        window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
          enableHighAccuracy: true
        });
      } else {
        console.log("浏览器不支持html5来获取地理位置信息");
      }
      function handleSuccess(position) {
        //经纬度
        var lng = Math.round(position.coords.longitude * 1000000) / 1000000;
        var lat = Math.round(position.coords.latitude * 1000000) / 1000000;
        console.log(position);
        //let pos = 121.034372 + ',' + 31.1372824;
        _this.getCurrentLocation.lng = lng;
        _this.getCurrentLocation.lat = lat;
        _this.saveCurrentLocation(_this.getCurrentLocation);
        let pos = lng+','+lat;
        //获取地名
        getPlaceName(pos);
        function getPlaceName(pos){
          gaoDeAxios.get('http://restapi.amap.com/v3/geocode/regeo', {
            params: {
              output: 'json',
              location: pos,
              key: '35d76866a498d51fa701a70f7100099a',
              radius: 1000,
              extensions: 'all'
            }
          }).then(function (res) {
            console.log(res.data);
            if(res.data.regeocode.pois[0] == undefined){
              console.log('浏览器未能正确定位，开启默认测试坐标（121.034372，31.137282）');
              lng = 121.034372;
              lat = 31.137282;
              _this.getCurrentLocation.lng = lng;
              _this.getCurrentLocation.lat = lat;
              pos = lng + ',' + lat;
              //获取地名
              getPlaceName(pos);
            }else{
              _this.getCurrentLocation.place = res.data.regeocode.formatted_address;
              _this.saveCurrentLocation(_this.getCurrentLocation);
              getCinema(pos);
            }
          }).catch(function (err) {
            console.log('err', err);
          });
        }

      };
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
        }).catch(function (err) {
          console.log('err', err);
        });
      }

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
        alert(result);
      }
    }
  };
</script>

<style lang="scss">

</style>
