import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: document.documentElement.clientWidth < 768
  },
  mutations: {
    setIsMObile (state, val) {
      state.isMobile = val
    }
  },
  actions: {}
})
