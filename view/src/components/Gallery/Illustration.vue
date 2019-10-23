<template>
	<div class='illustration__ '>
		<!-- ////MODAL//// -->
		<div class='modal' v-show='show'>
			<span class='close' @click='closeModal()'>&#10006;</span>
			<div class='showModal'>
				<transition name='show'>
						<img class='colModal content' v-if='show' alt='image'
						:src='"/static/client/img"+ selectedImg.title' id='modalImg'
						>
					<!-- <div class='colModal content' v-if='show'
					:style='{backgroundImage: "url(/static/client/img/" + selectedImg.title + ")"}'
					></div> -->
				</transition>
			</div>
		</div>
		<!-- //////MODAL//// -->

		<transition-group name='staggered-fade' tag='div'
			:css='false'
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
			class='illus_row'>
			<div v-if='loadingImg' v-for='(col, coli) in imgs' :key='col' :data-index='coli' class='column'>
				<div v-if='loadingImg' v-for='(elem, i) in col' :key='elem'
					:id='elem.id' :data-index='i' @click='SelectImg(elem, true)' class='imgs' >
					<img :src='"/static/client/img"+ elem.title' alt='img'>
				</div>
			</div>
		</transition-group>

		<!-- /////////TRANSITION/////// -->

	</div>
</template>

<style lang='scss'>
	@import '../../assets/css/scss/illustration.scss';
</style>

<script>
import Velocity from 'velocity-animate'
import axios from 'axios'

export default{
	name: 'Illustration',
	data () {
		return {
			i: 0,
			nbrImg: 0,
			loadingImg: false,
			show: false,
			selectedImg: {},
			imgs: []
		}
	},
	mounted () {
		this.loadingImg = true
		axios.get('http://magaliedibyang.fr:3030/Gallery/Illustrations').then((respond) => {
			this.nbrImg = respond.data.data.length
			this.imgs = respond.data.data
			console.log(respond.data.data.length)
		}).catch(function (err) {
			console.log(err)
		})
	},
	methods: {
		SelectImg: function (elem, show) {
			if (show) {
				this.show = show
				this.selectedImg = elem
				var ca = new Image()
				ca.src = '/static/client/img' + this.selectedImg.title
				console.log(this.selectedImg.title)
				console.log(ca.width, ca.height)
			}
		},
		closeModal: function () {
			var that = this
			that.show = false
			this.selectedImg = null
		},
		beforeEnter: function (el) {
			el.style.opacity = 0
		},
		enter: function (el, done) {
			var delay = el.dataset.index * 100
			setTimeout(function () {
				Velocity(
					el,
					{opacity: 1},
					{complete: done}
				)
			}, delay)
		}
	}
}
</script>
