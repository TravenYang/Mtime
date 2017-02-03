<template>
  <div class="find" style="height:600px">
    <div id='find' style="height:600px"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import AMap from 'AMap';
  import gaoDeAxios from 'axios';
  import {mapGetters,mapActions} from 'vuex';
  export default{
    computed: {
      ...mapGetters([
        'getCurrentLocation'
      ])
    },
    methods: {
      ...mapActions([
        'saveCurrentLocation'
      ])
    },
    mounted(){
      let _this = this;
      let map = new AMap.Map("find", {
        resizeEnable: true
      });
      //获取地理信息
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
        let lng = Math.round(position.coords.longitude * 1000000) / 1000000;
        let lat = Math.round(position.coords.latitude * 1000000) / 1000000;
        //let pos = 121.034372 + ',' + 31.137282;
        _this.getCurrentLocation.lng = lng;
        _this.getCurrentLocation.lat = lat;
        let pos = lng + ',' + lat;
        //高德sdk
        AMap.service(["AMap.PlaceSearch"], function () {
          var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 15,
            type: '电影院',
            pageIndex: 1,
            map: map
          });
          //中心点坐标
          console.log('down');
          lng = _this.getCurrentLocation.lng;
          lat = _this.getCurrentLocation.lat;
          let cpoint = [lng, lat];
          placeSearch.searchNearBy('', cpoint, 10000, function (status, result) {
            console.log(status, result);
            if (status == 'no_data') {
              console.log('浏览器未能正确定位，开启默认测试坐标（121.034372，31.137282）');
              lng = 121.034372;
              lat = 31.137282;
              _this.getCurrentLocation.lng = lng;
              _this.getCurrentLocation.lat = lat;
              cpoint = [lng, lat];
              pos = lng + ',' + lat;
              //获取地名
              getPlaceName(pos);
              placeSearch.searchNearBy('', cpoint, 10000, function (status, result) {
                console.log(status, result);
                if (status == 'no_data') {
                  console.log('浏览器依然未能正确定位');
                }
              });
            }
          });
        });
        _this.saveCurrentLocation(_this.getCurrentLocation);
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
            console.log('pos', pos);
            _this.getCurrentLocation.place = res.data.regeocode.formatted_address;
            _this.saveCurrentLocation(_this.getCurrentLocation);
          }).catch(function (err) {
            console.log('err', err);
          });
        }
      };
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
  }
</script>

<style lang="scss">


</style>
