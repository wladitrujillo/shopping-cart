(function (angular) {
    'use strict';
    let app = angular.module("eShopper");

    app.component('headerComponent', {
        templateUrl: 'components/header/header.template.html',
        controller: HeaderCtrl
    });

    HeaderCtrl.$inject = ['$scope'];

    function HeaderCtrl($scope) {

        $scope.header = {
            phone: "+2 95 01 88 821",
            email: "info@domain.com"
        };

        $scope.social = [
            { href: '', icon: 'fa fa-facebook' },
            { href: '', icon: 'fa fa-twitter' },
            { href: '', icon: 'fa fa-linkedin' },
            { href: '', icon: 'fa fa-dribbble' },
            { href: '', icon: 'fa fa-google-plus' }];

        $scope.options = [
            { name: 'Account', href: '', icon: 'fa fa-user' },
            { name: 'Wishlist', href: '', icon: 'fa fa-star' },
            { name: 'Checkout', href: '#!checkout', icon: 'fa fa-crosshairs' },
            { name: 'Cart', href: '#!cart', icon: 'fa fa-shopping-cart' },
            { name: 'Login', href: '#!login', icon: 'fa fa-lock' }];
    }
}(angular))