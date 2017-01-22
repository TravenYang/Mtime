/**
 * Created by Traven on 2017/1/22.
 */
import {SHOWHEADADV} from './types';
const state ={
  showHeadAdvVal:true
};

const getters = {
  showHeadAdvVal:(state)=>{
    return state.showHeadAdvVal;
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
