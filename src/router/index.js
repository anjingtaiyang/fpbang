import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tabbar from '@/components/Tabbar'
import Work from '@/components/Work'
import Makeoutinvoice from '@/components/Makeoutinvoice'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
	  redirect:'/tabbar' 
    },
    {
      path: '/hello',
      component: Hello,
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: Tabbar,
  	  children:[
        {path:'work',component:Work},
        {path:'makeoutinvoice',component:Makeoutinvoice}
	   ],
	   redirect:'/tabbar/makeoutinvoice' //进入news就重定向
    }
  ]
})
