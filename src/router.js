import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/service/:id',
    name: 'service',
    component: () => import(/* webpackChunkName: "service" */ './views/Service.vue')
  },
  {
    path: '/cases/:id',
    name: 'cases',
    component: () => import(/* webpackChunkName: "Web" */ './views/Cases.vue')
  }

  ]
})
