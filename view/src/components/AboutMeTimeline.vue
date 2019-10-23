<template>
<div class='timeline'>
	<section style=''>
		<ol>
			<li v-for='(txt, i) in data' :key='i'>
				<div>
					<h4> {{txt.date}} | {{txt.title}}</h4>
					<span> {{txt.desc}}</span>
				</div>
			</li>
		</ol>
	</section>
</div>
</template>

<script>
export default {
	name: 'Timeline',
	data () {
		return {
			data: [
				{
					date: 2000,
					title: 'High School Diploma',
					desc: ''
				},
				{
					date: 2001,
					title: 'first Degree',
					desc: ''
				},
				{
					date: 2002,
					title: 'second Degree',
					desc: ''
				},
				{
					date: 2003,
					title: 'first work',
					desc: ''
				},
				{
					date: 2004,
					title: 'second work',
					desc: ''
				},
				{
					date: 2005,
					title: 'current work',
					desc: ''
				}
			]
		}
	}
}
</script>

<style scoped lang='scss'>
	@import './../assets/css/scss/aboutmeTimeline.scss';
</style>
