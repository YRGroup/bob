import Vue from 'vue'
import Vuex from 'vuex'
import API from "@/api/index";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: document.documentElement.clientWidth < 768,
    nbd: {}
  },
  mutations: {
    setIsMObile(state, val) {
      state.isMobile = val
    },
    setNbd(state, val) {
      state.nbd = val
    }
  },
  actions: {
    getNbd(context) {
      API.getCatPosts(44, 1, 9).then(res => {
        context.commit('setNbd', res.data)
      })
    }
  }
})
