<template>
	<div class='Home'></div>
</template>

<style lang='scss' scoped>
	@import '../assets/css/scss/home.scss';
</style>
<script>
import Categories from './Gallery/Category'
import AboutMe from './AboutMe'

export default{
	name: 'Home',
	components: {
		'Categories': Categories,
		'AboutMe': AboutMe
	},
	data () {
		return {
			info: {
				imgUrl: ''
			}
		}
	},
}
</script>
