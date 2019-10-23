<template>
	<div class='carousel'>
		<slot></slot>
		<button @click.prevent='prev' class='carousel__nav carousel__next'>&#10094;</button>
		<button @click.prevent='next' class='carousel__nav carousel__prev'>&#10095;</button>
		<div class='carousel__page'>
			<button v-for='(slide, i) in this.slideCount' :key='i' @click.prevent='goTo(i , index)'
			:class='{activ : i  == index }'><span>{{ i + 1}}</span></button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Carousel',
	data () {
		return {
			index: 0,
			slides: [],
			direction: null
		}
	},
	mounted () {
		this.slides = this.$children
		this.slides.forEach(function (slide, i) {
			slide.index = i
		})
	},
	computed: {
		slideCount () {
			return this.slides.length
		}
	},
	methods: {
		next () {
			this.direction = 'L'
			this.index++
			if (this.index >= this.slideCount) {
				this.index = 0
			}
		},
		prev () {
			this.direction = 'R'
			this.index--
			if (this.index < 0) {
				this.index = this.slideCount - 1
			}
		},
		goTo (key, i) {
			if (this.index > key) {
				this.direction = 'R'
				this.index--
			} else if (this.index < key) {
				this.direction = 'L'
				this.index++
			}
		}
	}
}
</script>

<style lang='scss' scoped>
	.carousel{
		position:relative;
		overflow:hidden;
		.carousel__nav{
			position: absolute;
			top : 50%;
			transform: translateY(-50%); // centrer verticalement l elem
			border: none;
			background-color: transparent;
			font-size: 2.9em;
		}
		.carousel__next{
			left: 10px;
		}
		.carousel__prev{
			right: 10px;
			left: auto;
		}
		.carousel__page{
			position:absolute;
			bottom: 36px;
			right: 0;
			left: 0;
			text-align: center;
		}
		.carousel__page button{
			display:inline-block;
			width:20px;
			height:20px;
			border:none;
			background-color: black;
			opacity: .8;
			border-radius:20px;
			margin: 0 5px 0 5px;
		}
		.carousel__page button.activ{
			background-color: white;
			border:red
		}
		.carousel__page button span {
			color:white;
		}
		.carousel__page button.activ span {
			color:black;
		}
	}
</style>
