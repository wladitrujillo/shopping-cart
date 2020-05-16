(function (angular) {
	'use strict';

	let app = angular.module('eShopper', ['ngRoute']);

	app.config(['$routeProvider',
		function config($routeProvider) {
			$routeProvider.
				when('/home', {
					template: '<home-component></home-component>'
				}).
				when('/cart', {
					template: '<cart-component></cart-component>'
				}).
				otherwise('/home');
		}
	]);


}(angular))



