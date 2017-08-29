<template>
	<div class="moduletitle dis_flex">
		<div>
			<img src="../assets/logo.png"/>
		</div>
		<div class="titlename" v-text="title">
		</div>
		<div>
			<img src="../assets/logo.png"/>
		</div>
	</div>
</template>

<script>
	export default{
		name:'moduletitle',
		props:['title']
	}
</script>

<style>
	@import '../styles/common.scss';
</style>