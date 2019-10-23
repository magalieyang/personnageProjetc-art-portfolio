<template>
	<transition :name='direction'>
		<div v-show='visible'>
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'CarouselSlide',
	data () {
		return {
			index: 0
		}
	},
	computed: {
		visible () {
			return this.index === this.$parent.index
		},
		direction () {
			if (this.$parent.direction) {
				return 'slide-' + this.$parent.direction
			}
		}
	}
}
</script>

<style>
	.slide-L-enter-active{
		animation: slideIn-L .25s;
		animation-timing-function: linear;
		position: relative;
		margin: 0 auto;
	}
	.slide-L-leave-active{
		position: absolute;
		top : 0;
		left : 0;
		right:0;
		bottom: 0;
		animation: slideOut-L .25s;
		animation-timing-function: linear;
	}
	@keyframes slideIn-L {
		0% { transform: translateX(100%)}
		100% { transform: translateX(0%) }
	}
	@keyframes slideOut-L {
		0% { transform: translateX(0%);}
		100% { transform: translateX(-100%)}
	}
	.slide-R-enter-active{
		animation: slideIn-R .25s;
		animation-timing-function: linear;
		position: relative;
		margin: 0 auto;
	}
	.slide-R-leave-active{
		position: absolute;
		top : 0;
		left : 0;
		right:0;
		bottom: 0;
		animation: slideOut-R .25s;
		animation-timing-function: linear;
	}
	@keyframes slideIn-R {
		0% { transform: translateX(-100%) }
		100% { transform: translateX(0%) }
	}
	@keyframes slideOut-R {
		0% { transform: translateX(0%) }
		100% { transform: translateX(100%) }
	}

</style>
