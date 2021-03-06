import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/species/:name',
      name: "species",
      component: () => import(/* webpackChunkName: "species" */ './views/Species.vue')
    },
    {
      path: '/species/:name/:era',
      name: "era",
      component: () => import(/* webpackChunkName: "era" */ './views/Era.vue')
    },
    {
      path: "/biblography",
      name: "biblography",
      component: () => import(/* webpackChunkName: "biblography" */ './views/Biblography.vue')
    }
  ]
})
