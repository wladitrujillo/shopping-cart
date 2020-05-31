angular.module('eShopper')
    .component('cart', {
        bindings: { items: '<' },
        templateUrl: 'components/cart/cart.template.min.html',
        controller: ['ShoppingCartService',
            function (ShoppingCartService) {
                this.remove = product => ShoppingCartService.remove(product);
            }]
    });