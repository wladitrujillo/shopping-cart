(function (angular) {
    'use strict';

    let app = angular.module('eShopper');
    app.component('cart', {
        bindings: { items: '<' },
        templateUrl: 'components/cart/cart.template.min.html',
        controller: Controller
    });

    Controller.$inject = ['ShoppingCartService'];

    function Controller(ShoppingCartService) {
        this.remove = product => ShoppingCartService.remove(product);
    }

}(angular))