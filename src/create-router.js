import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				component: () => import('./pages/Home.vue')
			},
			{
				path: '/about',
				component: () => import('./pages/About.vue')
			},
		],
	});
};

export default createRouter;
