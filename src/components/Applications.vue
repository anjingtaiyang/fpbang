<template>
	<div>
		<img src="../assets/logo.png"/>
		<div v-text='menu'></div>
	</div>
</template>

<script>
	export default{
		name:'applications',
		props:['menu'],
		data(){
			return {
				ddbb:''
			}
		}
	}
</script>

<style>
	
</style>