import Vue from 'vue'
import Router from 'vue-router'
import MintUI from '../../node_modules/mint-ui'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: (resolve) => {
        require(['../components/HomePage.vue'], resolve)
      }
    },
    
    {
      path: '/HelloWorld', 
      component: (resolve) => {
        require(['../components/HelloWorld.vue'], resolve)
      },
      children:[
          { 
            path: '/', 
            component: (resolve) => {
              require(['../components/pageone/IndexOne.vue'], resolve)
            }
          },
          {
            path: 'CeShi',
            component: (resolve) => {
              require(['../components/CeShi.vue'], resolve)
            }
          },
          {
            path: 'MySelf',
            name: 'MySelf',
            component: (resolve) => {
              require(['../components/MySelf.vue'], resolve)
            }
          }
      ]
    },
    {
      path: '*',
      redirect: '/MySelf'
    }
    
  ]
})
