(function (angular) {
	'use strict';

	let app = angular.module('eShopper');

	app.config(['$stateProvider', '$urlRouterProvider',
		function config($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/")
			// An array of state definitions
			var states = [

				{ name: 'home', url: '/', component: 'home' },
				{ name: 'cart', url: '/cart', component: 'cart' },
				{ name: 'checkout', url: '/checkout', component: 'checkout' },
				{ name: 'login', url: '/login', component: 'login' },
				{ name: 'contact', url: '/contact', component: 'contact' },
				{
					name: 'people',
					url: '/people',
					component: 'people',
					resolve: {
						people: function (PeopleService) {
							return PeopleService.getAllPeople();
						}
					}
				},

				{
					name: 'people.person',
					url: '/{personId}',
					component: 'person',
					resolve: {
						person: function (people, $stateParams) {
							return people.find(function (person) {
								return person.id === $stateParams.personId;
							});
						}
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



