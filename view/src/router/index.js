import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
// import Gallery from '@/components/Gallery/Category'
import Illustration from '@/components/Gallery/Illustration'
// import Characters from '@/components/Gallery/Characters'
// import Web from '@/components/Web'
// import Projects from '@/components/Projects/ProjectsHome'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Category
		},
		// {
		// 	path: '/Gallery',
		// 	name: 'Categories',
		// 	component: Gallery
		// },
		// {
		// 	path: '/Gallery/Characters',
		// 	name: 'Characters',
		// 	component: Characters
		// },
		{
			path: '/Gallery/Illustrations',
			name: 'Illustration',
			component: Illustration
		},
		// {
		// 	path: '/Webdesign',
		// 	name: 'Web',
		// 	component: Web
		// },
		// {
		// 	path: '/Projects',
		// 	name: 'Projects',
		// 	component: Projects
		// },
		{
			path: '/Aboutme',
			name: 'AboutMe',
			component: AboutMe
		},
		{
			path: '/Contact',
			name: 'Contact',
			component: Contact
		},
		{
			path: '*',
			name: 'NoFound',
			component: Illustration
		}
	]
})
