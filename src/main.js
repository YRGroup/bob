import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueParticles from 'vue-particles'
import VueLazyload from 'vue-lazyload'
import VModal from 'vue-js-modal'

Vue.use(VModal, {
  dialog: true
})

Vue.use(VueLazyload, {
  preLoad: 1.2,
  error: require('@/images/nodata.jpg'),
  loading: require('@/images/nodata.jpg'),
  attempt: 1
})
Vue.use(VueParticles)
Vue.use(ElementUI)

Vue.config.productionTip = false
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')