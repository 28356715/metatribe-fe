import Vue from 'vue'
import Router from 'vue-router'
import HelloMetaTribe from '@/components/HelloMetaTribe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloMetaTribe
    }
  ]
})
