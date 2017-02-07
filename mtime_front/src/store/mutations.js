/**
 * Created by Traven on 2017/1/22.
 */
import {
  SHOW_HEAD_ADV,
  SHOW_NAV_VAL,
  SHOW_SEARCH_VAL,
  HIDE_NAV_AND_SEARCH,
  SHOW_NAV_AND_SEARCH,
  CHOOSE_MOVIE_TYPE_HOME,
  HOME_MOVIE_DATA,
  WILL_MOVIE_DATA,
  CINEMA_DATA,
  CURRENT_LOCATION,
  SAVE_ACCOUNT,
  SAVE_NICK_NAME,
  SHOW_LOADING,
  HIDE_LOADING
} from './types';
const state = {
  url: 'http://mokebuy.com:13009/',
  showHeadAdvVal: true,
  showNavVal: true,
  showSearchVal: true,
  isNow: true,
  homeMovieData:[],
  willMovieData:[],
  cinemaData:'',
  currentLocation:{lng:'',lat:'',place:''},
  account_l:'',
  nickName_l:'',
  loading:false,
  footerShow:true
};

const getters = {
  loading(state){
    return state.loading;
  },
  getAccount:(state)=>{
    return state.account_l;
  },
  getNickName:(state)=>{
    return state.nickName_l;
  },
  getCurrentLocation:(state)=>{
    return state.currentLocation;
  },
  showHeadAdvVal: (state)=> {
    return state.showHeadAdvVal;
  },
  showNavVal: (state)=> {
    return state.showNavVal;
  },
  showSearchVal: (state)=> {
    return state.showSearchVal;
  },
  url: (state)=> {
    return state.url;
  },
  isNow: (state)=> {
    return state.isNow;
  },
  homeMovieData:(state)=>{
    return state.homeMovieData;
  },
  willMovieData:(state)=>{
    return state.willMovieData;
  },
  getcinemaData:(state)=>{
    return state.cinemaData;
  }
}
const mutations = {
  [HIDE_LOADING](state){
    state.loading=false;
  },
  [SHOW_LOADING](state){
    state.loading=true;
  },
  [SAVE_ACCOUNT](state, n){
    console.log('val', n);
    state.account_l = n;
  },
  [SAVE_NICK_NAME](state, n){
    console.log('val', n);
    state.nickName_l = n;
  },
  [CURRENT_LOCATION](state, n){
    console.log('val', n);
    state.currentLocation = n;
  },
  [CINEMA_DATA](state, n){
    console.log('val', n);
    state.cinemaData = n;
  },
  [HOME_MOVIE_DATA](state, n){
    console.log('val', n);
    state.homeMovieData = n;
  },
  [WILL_MOVIE_DATA](state, n){
    console.log('val', n);
    state.willMovieData = n;
  },
  [CHOOSE_MOVIE_TYPE_HOME](state, n){
    console.log('val', n);
    state.isNow = n;
  },
  [SHOW_HEAD_ADV](state){
    state.showHeadAdvVal = false;
  },
  [SHOW_NAV_VAL](state){
    state.showNavVal = !state.showNavVal;
  },
  [SHOW_SEARCH_VAL](state){
    state.showSearchVal = !state.showSearchVal;
  },
  [HIDE_NAV_AND_SEARCH](state, n1, n2){
    state.showNavVal = n1 || false;
    state.showSearchVal = n2 || false;
    console.log('hide');
  },
  [SHOW_NAV_AND_SEARCH](state, n1, n2){
    state.showNavVal = n1 || true;
    state.showSearchVal = n2 || true;
  }
};
export default{
  state,
  mutations,
  getters
}
