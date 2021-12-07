import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Rechercher from '../components/Rechercher'
import Cours from '../components/Cours'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/rechercher',
      name: 'Rechercher',
      component: Rechercher
    },
    {
      path: '/cours',
      name: 'Cours',
      component: Cours
    }
  ]
})
