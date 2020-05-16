(function (angular) {
	'use strict';

	let app = angular.module('eShopper', ['ngRoute','rzSlider']);

	app.config(['$routeProvider',
		function config($routeProvider) {
			$routeProvider.
				when('/home', {
					template: '<home-component></home-component>'
				}).
				when('/cart', {
					template: '<cart-component></cart-component>'
				}).
				when('/login', {
					template: '<login-component></login-component>'
				}).
				when('/contact', {
					template: '<contact-component></contact-component>'
				}).when('/checkout', {
					template: '<checkout-component></checkout-component>'
				}).
				otherwise('/home');
		}
	]);


}(angular))



