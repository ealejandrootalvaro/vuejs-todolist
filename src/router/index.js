import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Proyecto from '../views/Proyecto.vue'
import Users from '../views/Users.vue'
import Tasks from '../views/Tasks.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Users
    },
    {
      path: '/proyecto/:id',
      name: 'proyecto',
      component: Proyecto
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/task/:id',
      name: 'taskUser',
      component: Tasks
    }
  ]
})
