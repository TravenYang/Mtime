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
  hideNavAndSearch:({commit})=>{
    commit(types.HIDE_NAV_AND_SEARCH);
  },
  showNavAndSearch:({commit})=>{
    commit(types.SHOW_NAV_AND_SEARCH);
  },
  chooseMovieType:({commit},n)=>{
    commit(types.CHOOSE_MOVIE_TYPE_HOME,n);
  },
}
