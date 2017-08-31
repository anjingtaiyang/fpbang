<template>
	<div>
		<router-view></router-view>
		<mt-tabbar v-model="selected">
		  <mt-tab-item v-for='(item, key) in tabbar' :href="item.href" :id="item.id" :key="item.id">
		    <img slot="icon" src="../assets/logo.png">
		    	{{item.tabbarname}}
		  </mt-tab-item>
	    </mt-tabbar>
    </div>
</template>

<script>
	export default{
		data(){
		    	return { 
		    		selected: 'collectInvoice',
		    		tabbar:[
			    		{id:'collectInvoice',tabbarname:'收票',href:'#/tabbar/makeoutinvoice'},
					{id:'makeoutInvoice',tabbarname:'开票',href:'#/tabbar/makeoutinvoice'},
					{id:'workBench',tabbarname:'工作台',href:'#/tabbar/work'},
					{id:"message",tabbarname:'消息',href:'#/tabbar/makeoutinvoice'},
					{id:"mine",tabbarname:'我的',href:'#/waitforinvoice'}
		    		],
		    	}
		},
		watch: {
		    	selected: function (val, oldVal) {
		        console.log(val)
		    }
		}
	}
	
</script>

<style scoped>
	.mint-tabbar > .mint-tab-item {
	    color: #000000;
	}
	.mint-tabbar > .mint-tab-item.is-selected {
	    background-color: #eaeaea;
	    color: green;
	}
</style>