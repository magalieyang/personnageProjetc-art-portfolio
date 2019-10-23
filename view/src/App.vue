<template>
	<div id="app">
		<Loader v-if='loading'></Loader>
		<div v-else>
			<div class='row'>
				<Navigation id='header' class='header'></Navigation>
				<div class='mainContainer'><router-view/></div>
			</div>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Navigation from './components/Recurent/navigation'
import Footer from './components/Recurent/footer'
import Loader from './components/Recurent/loader'

export default {
	name: 'App',
	components: {
		'Navigation': Navigation,
		'Footer': Footer,
		'Loader': Loader
	},
	data () {
		return {
			loading: false,
			win_size: 0,
			old_size: 0
		}
	},
}
</script>
<style src="./assets/css/app.css"></style>
