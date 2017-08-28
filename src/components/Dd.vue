<template>
	<div>
		ddd
	</div>
</template>

<script>
export default{
		name:'ddd',
		data(){
			return{
				isActive:'main'
			}
		},
		methods:{
			link:function(path){
				console.log(path)
				this.isActive=path
				return{
					path:'/'+path
				}
			}
		}
	}
</script>

<style>
</style>