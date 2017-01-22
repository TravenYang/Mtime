/**
 * Created by Traven on 2017/1/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);
export default new Vuex.Store(
  {
    modules:{
      mutations
    },
    actions
  }
);
