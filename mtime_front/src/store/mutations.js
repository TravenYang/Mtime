/**
 * Created by Traven on 2017/1/22.
 */
import {SHOW_HEAD_ADV,SHOW_NAV_VAL,SHOW_SEARCH_VAL,SHOW_NAV_AND_SEARCH} from './types';
const state ={
  url:'http://mokebuy.com:13009/',
  showHeadAdvVal:true,
  showNavVal:true,
  showSearchVal:true
};

const getters = {
  showHeadAdvVal:(state)=>{
    return state.showHeadAdvVal;
  },
  showNavVal:(state)=>{
    return state.showNavVal;
  },
  showSearchVal:(state)=>{
    return state.showSearchVal;
  },
  url:(state)=>{
    console.log(state.url);
    return state.url;
  }
}
const mutations = {
  [SHOW_HEAD_ADV](state){
    state.showHeadAdvVal = false;
  },
  [SHOW_NAV_VAL](state){
    state.showNavVal = !state.showNavVal;
  },
  [SHOW_SEARCH_VAL](state){
    state.showSearchVal = !state.showSearchVal;
  },
  [SHOW_NAV_AND_SEARCH](state){
    console.log(22222);
    state.showNavVal = !state.showNavVal;
    state.showSearchVal = !state.showSearchVal;
  }
};
export default{
  state,
  mutations,
  getters
}
