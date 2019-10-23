<template>
	<div class='categories col-12'>
		<h1 style='float:left;color:#ca5a5a; padding-left:45px;'>Gallery</h1>
		<Carousel class='illustrations col-12' v-for='(nType, iType) in 3' :key='iType'>
			<CarouselSlide v-for='(n,index) in 3' :key='index'>
				<div class='carousel__slide' :style='{ "background-image": select(index, iType, imgs) }'></div>
			</CarouselSlide>
		</Carousel>
	</div>
</template>

<style lang='scss' scoped>
	@import '../../assets/css/scss/gallery.scss';
</style>

<script>
import Carousel from './carousel/categoryCarousel'
import CarouselSlide from './carousel/categoryCarouselSlide'
import axios from 'axios'

export default{
	name: 'Categories',
	components: {
		'Carousel': Carousel,
		'CarouselSlide': CarouselSlide
	},
	data () {
		return {
			ok: false,
			imgs: []
		}
	},
	beforeCreate () {
		axios.get('http://magaliedibyang.fr:3030/Gallery').then((respond) => {
			this.imgs = respond.data.data
		}).catch(function (err) {
			console.log(err)
		})
	},
	methods: {
		select (index, itype, imgs) {
			if (this.imgs !== undefined && this.imgs.length) {
				let r = index + (itype * 3)
				let e = imgs[r]
				let t = 'url("/static/client/img'
				let res = t.concat(e.title, '")')
				return (res)
			} else {
				return (null)
			}
		}
	},
	beforeDestroy () {
		this.imgs = null
		delete this.imgs
	}
}
</script>
