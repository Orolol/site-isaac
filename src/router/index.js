import Vue from 'vue'
import Router from 'vue-router'

import wrapper from '../views/wrapper.vue'
import App from '../App.vue'
import Oeuvre from '../components/Oeuvre.vue'
import Homme from '../components/Homme.vue'
import Accueil from '../components/Accueil.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Accueil',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/wrapper/:lang',
      name: 'wrapper',
      component: wrapper,
      props: true
    },
    {
      path: '/oeuvre/:cat/:type',
      name: 'Oeuvre',
      component: Oeuvre,
      props: true
    },
    {
      path: '/homme/:cat',
      name: 'Homme',
      component: Homme,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
  }
})
