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
  hideNavAndSearch:({commit},n1,n2)=>{
    commit(types.HIDE_NAV_AND_SEARCH,n1,n2);
  },
  showNavAndSearch:({commit},n1,n2)=>{
    commit(types.SHOW_NAV_AND_SEARCH,n1,n2);
  },
  chooseMovieType:({commit},n)=>{
    commit(types.CHOOSE_MOVIE_TYPE_HOME,n);
  },
  getMovieData:({commit},n)=>{
    commit(types.HOME_MOVIE_DATA,n);
  },
  getMovieId:({commit},n)=>{
    console.log(n);
    commit(types.GET_MOVIE_ID,n);
  },
}
