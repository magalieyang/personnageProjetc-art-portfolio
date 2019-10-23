<template>
	<div class='aboutme'>
	<h1 class='aboutTitle'>ABOUT</h1>
		<div class='about'>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nunc ut augue blandit ultricies. Nullam ut mattis dolor. Morbi efficitur magna ex, eget tincidunt est condimentum quis. Proin molestie elit nec ornare tempus. Maecenas at nunc sollicitudin, gravida ligula ut, vehicula arcu. Donec tortor sem, rutrum quis finibus vitae, facilisis in sapien. Nulla sed scelerisque magna. Nulla nec finibus ex, vitae laoreet purus. Suspendisse ut accumsan dui, ut dignissim erat. Maecenas a ligula a diam imperdiet condimentum a eget augue. Vivamus aliquam accumsan eros, nec pretium mauris tristique a. Etiam varius bibendum orci, at commodo ipsum imperdiet non. Nullam rutrum arcu non nunc sodales vehicula. Curabitur ornare orci vel sem malesuada malesuada. Duis sit amet ante elit.
			<br /><br />
			Duis in mauris a augue commodo auctor. In quis enim nec elit tristique fringilla vel a dolor. Duis blandit libero nec molestie blandit. Nulla maximus orci in diam dictum, sed laoreet sem mattis. 
			</p>
			<div class='photo'>
			</div>
		</div>
		<div class='skills'>
			<h1 class='aboutTitle'>MY SKILLS</h1>
			<div class='pts'>
				<div v-for='(colSkills, b) in skills' class='col_skills' :key='b'>
					<div v-for='(elem, i) in colSkills' class='line_skills' :key='i'>
						<span>{{elem.type}}</span>
						<div class='val_skills'>
							<div class='fill' :style='{ width: calcSkillsPts(elem.val) }'></div>
						</div>
						<br />
					</div>
				</div>
			</div>
		</div>
		<h1 class='aboutTitle'>FORMATIONS & EXPERIENCES</h1>
		<timeline></timeline>
		<timelineMobile></timelineMobile>
		<div id='cv'>
			<h1 class='aboutTitle'>CURRICULUM VITAE</h1>
			<span></span>
			<a href='/static/client/pdf/pdf.pdf' alt='link'>&#8278; Link to my Curriculum Vitae &#8278;</a>
		</div>
	</div>
</template>

<script>
import Timeline from './AboutMeTimeline'
import TimelineMobile from './AboutMeTimelineMobile'

export default{
	name: 'AboutMe',
	components: {
		'timeline': Timeline,
		'timelineMobile': TimelineMobile
	},
	data () {
		return {
			skills: [
				[
					{type: 'HTML', val: 8.5},
					{type: 'CSS', val: 8.5},
					{type: 'PHP', val: 9.2},
					{type: 'C', val: 5}
				],
				[
					{type: 'JAVASCRIPT', val: 6.5},
					{type: 'VUE.JS', val: 7.5},
					{type: 'PHOTOSHOP', val: 9.5},
					{type: 'MYSQL', val: 5}
				]
			]
		}
	},
	methods: {
		calcSkillsPts (val) {
			return (val * 10 + '%')
		}
	}
}
</script>

<style lang='scss' scoped>
	@import './../assets/css/scss/aboutme.scss';
</style>
