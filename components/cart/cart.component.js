(function (angular) {
    'use strict';

    let app = angular.module('eShopper');
    app.component('cart', {
        bindings: { items: '<' },
        templateUrl: 'components/cart/cart.template.html',
        controller: Controller
    });

    function Controller() {     

    }

}(angular))