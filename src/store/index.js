import Vue from 'vue';
import Vuex from 'vuex';
//import sample from './modules/sample.js';


import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

// export default new Vuex.Store({
//     modules: {
//       sample
//     }
// });

export default new Vuex.Store({
  state,
  getters,
  mutations, 
  actions
})