import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tabbar from '@/components/Tabbar'
import Work from '@/components/Work'
import Makeoutinvoice from '@/components/Makeoutinvoice'
import Waitforinvoice from '@/components/Waitforinvoice'
import Invoicedetail from '@/components/Invoicedetail'
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
    },
    {
      path: '/waitforinvoice',
      name:'waitforinvoice',
	  component:Waitforinvoice 
    },
    {
      path: '/invoicedetail',
      name:'invoicedetail',
	  component:Invoicedetail 
    },
  ]
})
