<template>
	<div>
		<router-view></router-view>
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="invoiceWallet" href="#/tabbar/bb">
		    <img slot="icon" src="../assets/logo.png">
		    票夹
		  </mt-tab-item>
		  <mt-tab-item id="makeoutInvoice" href="#/tabbar/bb">
		    <img slot="icon" src="../assets/logo.png">
		    开票
		  </mt-tab-item>
		  <mt-tab-item id="collectInvoice"  href="#/tabbar/aa">
		    <img slot="icon" src="../assets/logo.png">
		    收票
		  </mt-tab-item>
		  <mt-tab-item id="workBench"  href="#/tabbar/cc">
		    <img slot="icon" src="../assets/logo.png">
		    工作台
		  </mt-tab-item>
		  <mt-tab-item id="message"  href="#/tabbar/dd">
		    <img slot="icon" src="../assets/logo.png">
		    消息
		  </mt-tab-item>
		  <mt-tab-item id="mine"  href="#/">
		    <img slot="icon" src="../assets/logo.png">
		    我的
		  </mt-tab-item>
	    </mt-tabbar>
    </div>
</template>

<script>
	export default{
		data(){
		    	return { selected: 'invoiceWallet'}
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