(function (angular) {
	'use strict';

	let app = angular.module('eShopper');

	app.config(['$stateProvider', '$urlRouterProvider',
		function config($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/")
			// An array of state definitions
			var states = [

				{
					name: 'home',
					url: '/',
					component: 'home',
					resolve: {
						products: ProductService => ProductService.getAll()
					}
				},
				{ name: 'checkout', url: '/checkout', component: 'checkout' },
				{
					name: 'cart',
					url: '/cart',
					component: 'cart',
					resolve: {
						items: ShoppingCartService => ShoppingCartService.getAll()
					}
				},
				{ name: 'login', url: '/login', component: 'login' },
				{ name: 'contact', url: '/contact', component: 'contact' },
				{
					name: 'product-list',
					url: '/product-list',
					component: 'productList',
					resolve: {
						products: ProductService => ProductService.getAll()
					}
				}, {
					name: 'product',
					url: '/{productId}',
					component: 'product',
					resolve: {
						product: (ProductService, $stateParams) =>
							ProductService.get($stateParams.productId)
					}
				},
				{
					name: 'blogger',
					url: '/blogger',
					component: 'blogger',
					redirectTo: 'blogger.blog-list',
				},
				{
					name: 'blogger.blog-list',
					url: '/blog-list',
					component: 'blogList',
					resolve: {
						blogs: BloggerService => BloggerService.getAll()
					}
				},
				{
					name: 'blogger.blog',
					url: '/{blogId}',
					component: 'blog',
					resolve: {
						blog: (BloggerService, $stateParams) =>
							BloggerService.get($stateParams.blogId)
					}
				}
			]
			// Loop over the state definitions and register them
			states.forEach(function (state) {
				$stateProvider.state(state);
			});
		}
	]);

	app.run(function ($uiRouter) {
		/*var Visualizer = window['ui-router-visualizer'].Visualizer;
		$uiRouter.plugin(Visualizer);*/

	});

}(angular))



