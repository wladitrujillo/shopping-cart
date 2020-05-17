(function (angular) {
	'use strict';

	let app = angular.module('eShopper');

	app.config(['$stateProvider', '$urlRouterProvider',
		function config($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/")
			// An array of state definitions
			var states = [

				{ name: 'home', url: '/', component: 'home' },
				{ name: 'checkout', url: '/checkout', component: 'checkout' },
				{ name: 'cart', url: '/cart', component: 'cart' },
				{ name: 'login', url: '/login', component: 'login' },
				{ name: 'contact', url: '/contact', component: 'contact' },
				{ name: 'shop', url: '/shop', component: 'shop' },
				{
					name: 'blogger',
					url: '/blogger',
					component: 'blogger',
					resolve: {
						blogs: BloggerService => BloggerService.getAll()
					}
				},
				{
					name: 'blogger.blog',
					url: '/{blogId}',
					component: 'blog',
					resolve: {
						blog: (blogs, $stateParams) =>
							blogs.find(blog => blog.id === $stateParams.blogId)
					}
				}
			]
			// Loop over the state definitions and register them
			states.forEach(function (state) {
				$stateProvider.state(state);
			});
		}


	]);




	app.run(function ($rootScope, $state, $uiRouter) {
		var Visualizer = window['ui-router-visualizer'].Visualizer;
		$uiRouter.plugin(Visualizer);

		$rootScope.$on('$stateChangeStart', function (evt, to, params) {
			if (to.redirectTo) {
				evt.preventDefault();
				$state.go(to.redirectTo, params)
			}
		});
	});

}(angular))



