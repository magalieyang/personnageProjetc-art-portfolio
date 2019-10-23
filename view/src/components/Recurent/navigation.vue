<template>
		<nav class='menu' id='menu'>
			<span id='Title'>{{ MyTitle }}</span>
			<div class='desktop'>
				<ul style='float:left'>
				<li v-for='tab in tab' :id='"tabDesk_" + tab.title' class='MenuListDesktop' :key='tab.id' @mouseout='active = !active' @mouseover='active = !active'>
					<a :href="'/' + tab.link" :id='"tabDesk_link_" + tab.link' :class='{ over : active}'>{{ tab.title }}</a>
				</li>
				</ul>
				<div class='contact logo'>
					<a href='https://www.facebook.com/dib.illustrations/' alt='facebook'><img src='/static/client/logo/flogo-HexRBG-Wht-58.png' alt='facebook'></a>
					<a href='https://www.instagram.com/magalie.dib/' alt='instagram'><img src='/static/client/logo/glyph-logo_May2016.png' style='filter: invert(100%);' alt='instaram'></a>
					<a href='https://twitter.com/magalie_dib' alt='twitter'><img src='/static/client/logo/Twitter_Social_Icon_Square_White.png' alt='twitter'></a>
					<a href='https://www.linkedin.com/in/magalie-yang-7a061697/' alt='linkedin'><img src='/static/client/logo/In-White-21px-TM.png' alt='linkedin'></a>
				</div>
			</div>
			<div class='mobile'>
				<div @click.prevent='showNav = !showNav' id='button'>
					<div :class='{"bar1": showNav}'></div>
					<div :class='{"bar2": showNav}'></div>
					<div :class='{"bar3": showNav}'></div>
				</div>
					<ul>
						<li v-if='showNav' v-for='tab in tab' :id='"tabMob_" + tab.id' :key='tab.id'
						class='MenuListMobile animation' :data-index='tab.id'>
							<a :href="'/' + tab.link" :id='"tabDesk_link_" + tab.link' :class='{ over : active}'>{{ tab.title }}</a>
						</li>
					</ul>
			</div>
		</nav>
</template>

<style lang='scss' scoped>
	@import "./../../assets/css/scss/navigation.scss";
</style>
<script>
export default {
	name: 'Navigation',
	data () {
		return {
			active: false,
			windowWidth: 0,
			showNav: false,
			MyTitle: 'Magalie "Dib" Yang',
			tab: [
				{id: 0, link: 'Gallery/Illustrations', title: 'Gallery'},
				{id: 1, link: 'Aboutme', title: 'About me'},
				{id: 2, link: 'Contact', title: 'Contact'}

			]
		}
	},
	mounted () {
		this.$nextTick(function () {
			window.addEventListener('resize', this.getWindowWidth) // When Window resized
			// init
			this.getWindowWidth()
		})
	},
	methods: {
		getWindowWidth (event) {
			this.windowWidth = document.documentElement.clientWidth
			if (this.windowWidth > 768) {
				this.showNav = false // If windowWidth > 768, desactivate the scrolled menu
			}
		}
	}
}
</script>
