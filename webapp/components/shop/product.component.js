(function (angular) {
    'use strict';

    let app = angular.module('eShopper');

    app.component('product', {
        templateUrl: 'components/shop/product.template.html',
        controller: Controller
    });

    function Controller() {

    }


}(angular))