import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/service/:id',
    name: 'service',
    component: () => import(/* webpackChunkName: "service" */ './views/Service.vue')
  }, {
    path: '/cases/:id',
    name: 'cases',
    component: () => import(/* webpackChunkName: "cases" */ './views/Cases.vue')
  }, {
    path: '/case/:id',
    name: 'case',
    component: () => import(/* webpackChunkName: "case" */ './views/Case.vue')
  }, {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ './views/Team.vue')
  }, {
    path: '/nbd',
    name: 'nbd',
    component: () => import(/* webpackChunkName: "team" */ './views/Nbd.vue')
  }, {
    path: '/mteam',
    name: 'mteam',
    component: () => import(/* webpackChunkName: "mteam" */ './views/mteam.vue')
  }, {
    path: '/nbddetail/:id',
    name: 'nbddetail',
    component: () => import(/* webpackChunkName: "mteam" */ './views/nbddetail.vue')
  }
  ]
})
