(function (angular) {
    'use strict';
    angular.module('eShopper')
        .service('ShoppingCartService', function () {
            let items = [];


            var service = {
                getAll: () => items,
                add: product => {
                    let index = findIndex(product);

                    if (index >= 0) {
                        items[index].count = items[index].count + 1;
                        items[index].subtotal = items[index].subtotal * items[index].count;
                    } else {
                        items.push(new Item(product, 1));
                    }
                },
                remove: product => {
                    let index = findIndex(product);
                    items.splice(index, 1);
                }
            }

            function findIndex(product) {
                return items.findIndex(e => e.id === product.id);
            }

            function Item(product, count) {
                this.product = product;
                this.count = count;
                this.subtotal = product.price * count;
            }

            return service;
        })
}(angular))