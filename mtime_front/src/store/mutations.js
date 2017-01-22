/**
 * Created by Traven on 2017/1/22.
 */
import {SHOWHEADADV} from './types';
const state ={
  url:'http://mokebuy.com:13009/',
  showHeadAdvVal:true
};

const getters = {
  showHeadAdvVal:(state)=>{
    return state.showHeadAdvVal;
  },
  url:(state)=>{
    console.log(state.url);
    return state.url;
  }
}
const mutations = {
  [SHOWHEADADV](state){
    state.showHeadAdvVal = false;
  }
};
export default{
  state,
  mutations,
  getters
}
