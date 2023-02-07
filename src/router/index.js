import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './../views/login/login'

export const routerMap = {
  summarize: () => import('./../views/summarize/index'),
  list: () => import('./../views/list/index'),
  layout: () => import('./../views/layout/index'),
  system: () => import('./../views/system/index'),
  account: () => import('./../views/account/index')
}


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/summarize',
  //   name: 'Summarize',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/summarize',
  //       name: 'Summarize',
  //       component: () => import('./../views/summarize/index')
  //     }
  //   ]
  // },
  // {
  //   path: '/list',
  //   name: 'List',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/list',
  //       name: 'List',
  //       component: () => import('./../views/list/index')
  //     }
  //   ]
  // },
  // {
  //   path: '/system',
  //   name: 'System',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/system',
  //       name: 'System',
  //       component: () => import('./../views/system/index')
  //     },
  //     {
  //       path: '/account',
  //       name: 'Account',
  //       component: () => import('./../views/account/index')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
