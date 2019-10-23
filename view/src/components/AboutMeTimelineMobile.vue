<template>
<div  class='timelineMobile'>
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

<style scoped>
	.timelineMobile section ol li{
		text-align: left;
		list-style: none;
	}
	.timelineMobile section ol li span{
		padding-left:25px;
	}
	.timelineMobile section ol li h4{
		margin-bottom:0;
	}
	.timelineMobile section ol li h4:before{
		content: '✦';
	}
</style>

<script>
export default {
	name: 'TimelineMobile',
	data () {
		return {
			data:[
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
			ß]
		}
	}
}
</script>
