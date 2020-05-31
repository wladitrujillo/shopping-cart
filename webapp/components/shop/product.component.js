(function (angular) {
    'use strict';

    let app = angular.module('eShopper');

    app.component('product', {
        bindings: { product: '<' },
        templateUrl: 'components/shop/product.template.min.html',
        controller: Controller
    });

    function Controller() {

    }


}(angular))