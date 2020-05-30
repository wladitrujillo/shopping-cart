(function (angular) {
    'use strict'
    let app = angular.module("eShopper");

    app.component('home', {
        bindings: { products: '<' },
        templateUrl: 'components/home/home.template.html',
        controller: HomeCtrl
    });

    function HomeCtrl() {

    }

}(angular))