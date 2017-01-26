<template>
  <div class="homeMovie">
    <i class="backToHome" @click="backToHome()"></i>
    <div class="hotMovie_text_cnt">
      <div>
        <router-link to="/home_movie/now_movie" @click.stop.native="chooseMovieType(true)"
                     :class="['hotMovie_text_now',{active:isNow}]">正在热映
        </router-link>
        <router-link to="/home_movie/will_movie" @click.stop.native="chooseMovieType(false)"
                     :class="['hotMovie_text_will',{active:!isNow}]">即将上映
        </router-link>
      </div>
    </div>
    <SearchBox></SearchBox>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex';
  import SearchBox from 'components/search/Search'
  export default{
    mounted(){
        this.hideNavAndSearch();
    },
    computed:{
      ...mapGetters([
        'isNow'
      ])
    },
    methods: {
      ...mapActions([
        'hideNavAndSearch',
        'chooseMovieType'
      ]),
      backToHome(){
        this.$router.push('/home');
        this.chooseMovieType(true);
      }
    },
    components: {
      SearchBox
    }
  }
</script>

<style lang="scss">
  .homeMovie {
    position: relative;
    .backToHome{
      background: url('./h_btn_back.png') no-repeat center center;
      background-size: 1.2rem 1.5rem;
      width:3rem;
      height:100%;
      position:absolute;
      left:0;
      top:0;
    }
    width: 100%;
    height: 100%;
    background: #1C2635;
    height: 4.4rem;
    .hotMovie_text_cnt {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      align-items: center;
      & > div {
        background: #0D121A;
        border-radius: 4rem;
      }
      a {
        text-align: center;
        display: inline-block;
        font-size: 1.3rem;
        line-height: 1;
        color: #fff;
        padding: .7rem 2.8rem;
        border-radius: 4rem;
        background: #0D121A;
        border: 1px solid #0D121A;
        &.active {
          background: #1c2635;
          border-color: #0D121A;
        }
      }
    }
  }
</style>
