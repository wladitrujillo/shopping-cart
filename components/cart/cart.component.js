(function (angular) {
    'use strict';

    let app = angular.module('eShopper');
    app.component('cart', {
        bindings: { items: '<' },
        templateUrl: 'components/cart/cart.template.html',
        controller: Controller
    });

    function Controller(ShoppingCartService) {
        this.remove = product => ShoppingCartService.remove(product);
    }

}(angular))