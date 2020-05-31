(function (angular) {
	'use strict';

	let app = angular.module('eShopper');

	app.config(['$stateProvider', '$urlRouterProvider', '$translateProvider',
		function config($stateProvider, $urlRouterProvider, $translateProvider) {
			$urlRouterProvider.otherwise("/")
			// An array of state definitions
			var states = [

				{
					name: 'home',
					url: '/',
					component: 'home'
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
					component: 'productList'
				}, {
					name: 'product',
					url: '/product/{productId}',
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

			//translate

			$translateProvider.translations('es', {
				FeatureItems: 'Productos',
				Contact: 'Contactános',
				Home: "Inicio",
				Shop: "Compras",
				Products: "Productos",
				Cart: "Carrito",
				AddToCart: "Agregar al Carrito",
				ContactInfo: "Información de Contacto",
				SocialNetworking: "Redes Sociales",
				RecommendedItems: "Te Recomendamos",
				Language: "Idioma",
				English: "Inglés",
				Spanish: "Español",
				Submit: "Enviar",
				Name: "Nombre",
				Email: "Email",
				Subject: "Motivo",
				YourMessageHere: "Tu mensaje aqui",
				Quantity: "Cantidad",
				Availability: "Disponibilidad",
				Condition: "Condición",
				Brand: "Marca",
				InStock: "Disponible",
				AllRightsReserved: "Todos Los Derechos Reservados",
				DesignedBy: "Diseñado por",
				AddToWishlist: "Agregar como deseado",
				ViewDetail: "Ver Detalle"

			});

			$translateProvider.translations('en', {
				FeatureItems: 'Products',
				Contact: 'Contact',
				Home: 'Home',
				Shop: "Shop",
				Products: "Products",
				Cart: "Cart",
				AddToCart: "Add to Cart",
				ContactInfo: "Contact Info",
				SocialNetworking: "Social Networking",
				RecommendedItems: "Recommended Items",
				Language: "Language",
				English: "English",
				Spanish: "Spanish",
				Submit: "Submit",
				Name: "Name",
				Email: "Email",
				Subject: "Subject",
				YourMessageHere: "Your Message Here",
				Quantity: "Quantity",
				Availability: "Availability",
				Condition: "Condition",
				Brand: "Brand",
				InStock: "In Stock",
				AllRightsReserved: "All Rights Reserved",
				DesignedBy: "Designed by",
				AddToWishlist: "Add to wishlist",
				ViewDetail: "View Detail"
			});
			$translateProvider.preferredLanguage('es');
		}
	]);

	app.run(function ($uiRouter) {
		/*var Visualizer = window['ui-router-visualizer'].Visualizer;
		$uiRouter.plugin(Visualizer);*/

	});

}(angular))



