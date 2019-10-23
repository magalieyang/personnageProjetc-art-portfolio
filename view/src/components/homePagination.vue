<template>
	<div class='homePagination'>
		<button v-for='(page, indexHome) in this.nbrpage' :key='indexHome' @click.prevent='goto(indexHome)'
			v-scroll-to='{el: "#" + ToPage[indexHome]}'
			:class='{activ: indexHome == nextIndex}'>
		</button>
	</div>
</template>

<style lang='scss' scoped>
	.homePagination {
		right: 10px;
		top:50%;
		transform:translateY(-50%);
		position: fixed;
		display: inline-block;
		width: 20px;
		margin: 15px;
		z-index:15;
		button {
			background-color:#ff6a6a70;
			width:16px;
			height:16px;
			border-radius: 20px;
			border: none;
			// margin: 10px 5px 10px 5px;
			margin: 0 auto;
			margin-bottom: 10px;
			margin-top:10px;
			&.activ{
				background-color: white;
				width: 20px;
				height:20px;
				border:solid rgba(240,116,102,.5) 1px;
			}
		}
	}
</style>

<script>

export default {
	name: 'homePagination',
	data () {
		return {
			nextIndex: 0,
			screenHeight: 0,
			nbrpage: 3,
			ToPage: ['header', 'Categories', 'Aboutme'],
			scrollpage: 0
		}
	},
	mounted () {
		this.$nextTick(function () {
			window.addEventListener('resize', this.idHeight)
			this.idHeight()
			window.addEventListener('resize', this.goto)
			this.goto()
		})
	},
	methods: {
		idHeight () {
			var el = []
			var last = 0
			var i = 0
			for (i = 0; i < this.nbrpage; i++) {
				if (i === 0) {
					el[i] = 0
				} else {
					el[i] = document.getElementById(this.ToPage[1]).clientHeight + last
					last = el[i]
				}
			}
			this.screenHeight = el
		},
		goto () {
			var currentY = window.scrollY
			currentY += 400
			var j = 0
			for (j = 0; j < this.nbrpage; j++) {
				if (currentY >= this.screenHeight[j]) {
					this.nextIndex = j
				} else {
					break
				}
			}
		}
	},
	created () {
		window.addEventListener('scroll', this.goto)
	},
	destroyed () {
		window.addEventListener('scroll', this.goto)
	}
}
</script>
