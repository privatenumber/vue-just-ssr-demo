import Vue from 'vue';
import createRouter from './create-router';

function createApp(App) {
	const router = createRouter();

	const app = new Vue({
		render: h => h(App),
		router,
	});

	return { app };
}

export default createApp;
