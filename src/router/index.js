import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [

    {
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld'),
      path: '/',
      meta: {
        title: '测试helloWorld页面'
      }
    },
    {
      name: 'list',
      component: () => import('@/pages/list/list'),
      path: '/list',
      meta: {
        title: 'list页面'
      }
    }, {
      name: 'home',
      component: () => import('@/pages/home/home'),
      path: '/home',
      meta: {
        title: '测试helloWorld页面'
      }
    }, {
      name: 'homeHeader',
      component: () => import('@/components/homeHeader'),
      path: '/homeheader',
      meta: {
        title: 'header页面'
      }
    }
  ]
})
