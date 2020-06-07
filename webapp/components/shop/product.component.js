angular.module('eShopper')
    .component('product', {
        bindings: { product: '<' },
        templateUrl: 'components/shop/product.template.html',
        controller: ['ShoppingCartService', 'ProductService', function (ShoppingCartService, ProductService) {

            let onError = err => console.error(err);

            this.addToCart = item => ShoppingCartService.add(item);


            this.getRelatedItems = function () {
                ProductService.getAll(2, 6)
                    .then(response => {
                        let products = response.data;
                        let index = products.length;
                        let primeraParte = products.slice(0, index / 2);
                        let segundaParte = products.slice(index / 2, index);

                        this.relatedItems = [
                            { items: primeraParte },
                            { items: segundaParte }
                        ]

                    })
                    .catch(onError);


            }

            this.getRelatedItems();



        }]
    });




