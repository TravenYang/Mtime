/**
 * Created by Traven on 2017/1/22.
 */
import * as types from './types';
export default{
  showHeadAdv:({commit})=>{
    commit(types.SHOW_HEAD_ADV);
  },
  showNavVal:({commit})=>{
    commit(types.SHOW_NAV_VAL);
  },
  showSearchVal:({commit})=>{
    commit(types.SHOW_SEARCH_VAL);
  },
  showNavAndSearch:({commit})=>{
    commit(types.SHOW_NAV_AND_SEARCH);
  }
}
