(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('shop', {
        templateUrl: 'components/shop/shop.template.html',
        controller: Controller
    });

    Controller.$inject = ['$scope'];

    function Controller($scope) {

    }


}(angular))