import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import tabbar from '@/components/tabbar'
import Aa from '@/components/Aa'
import Bb from '@/components/Bb'
import Cc from '@/components/Cc'
import Dd from '@/components/Dd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: tabbar,
      	    children:[
		        {path:'aa',component:Aa},
		        {path:'bb',component:Bb},
		        {path:'cc',component:Cc},
		        {path:'dd',component:Dd}
		    ],
		    redirect:'/tabbar/aa' //进入news就重定向
    }
  ]
})
