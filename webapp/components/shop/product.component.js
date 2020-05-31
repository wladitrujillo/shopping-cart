(function (angular) {
    'use strict';

    let app = angular.module('eShopper');

    app.component('product', {
        bindings: { product: '<' },
        templateUrl: 'components/shop/product.template.html',
        controller: Controller
    });

    function Controller() {

    }


}(angular))