import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: document.documentElement.clientWidth < 768,
    isPad: document.documentElement.clientWidth < 1024,
    nbd: {}
  },
  mutations: {
    setIsMObile(state, val) {
      state.isMobile = val
    },
    setIsPad(state, val) {
      state.isPad = val
    },
    setNbd(state, val) {
      state.nbd = val
    }
  },
  actions: {
    getNbd(context) {
      const NBD_CAT_ID = 44
      API.getCatPosts(NBD_CAT_ID, 1, 9).then(res => {
        context.commit('setNbd', res.data)
      })
    }
  }
})