import Vue from 'vue'
import Router from 'vue-router'
/* read */
import Hello from '@/components/Hello'
import read from '@/components/read/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/read/',
      name: 'test',
      component: read
    }

  ]
})
