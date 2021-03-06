import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules/'
import mutations from './mutations'
import getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  orderList: [],
  orderPageInfo: {},
  orderInfo: {},
  offerList: [],
  payInfo: {}
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  // modules,
  strict: debug
})