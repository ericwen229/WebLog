import Vue from 'vue'
import Router from 'vue-router'
import Log from '@/views/Log'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Log',
      component: Log,
    },
  ],
})
