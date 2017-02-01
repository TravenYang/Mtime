/**
 * Created by Traven on 2017/1/22.
 */
import {
  SHOW_HEAD_ADV,
  SHOW_NAV_VAL,
  SHOW_SEARCH_VAL,
  HIDE_NAV_AND_SEARCH,
  SHOW_NAV_AND_SEARCH,
  CHOOSE_MOVIE_TYPE_HOME
} from './types';
const state = {
  url: 'http://mokebuy.com:13009/',
  showHeadAdvVal: true,
  showNavVal: true,
  showSearchVal: true,
  isNow: true
};

const getters = {
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
  }
}
const mutations = {
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
