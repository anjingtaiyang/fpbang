<template>
	<div>
		<img src="../assets/logo.png"/>
		<div v-text='dd'></div>
	</div>
</template

<script>
	export default{
		name:'Collectinvoice',
		props:['dd'],
		data(){
			return{
				isActive:'main'
			}
		}
	}
</script>

<style>
	
</style>