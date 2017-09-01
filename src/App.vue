<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './styles/previewChromeStyle.scss';
	@import './styles/reset.scss';
	@import './styles/common.scss';
	*{margin: 0;padding: 0;}
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  height: 100%;
	}
</style>
