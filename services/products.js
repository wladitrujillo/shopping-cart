(function (angular) {
    'use strict';
    angular.module('eShopper')
        .service('ProductService', function ($http) {
            var service = {
                getAll: () => {
                    return $http.get('data/products.json', { cache: true }).then(resp => {
                        return resp.data;
                    });
                },

                get: id => {

                    return service.getAll().then(products => {
                        return products.find(product => product.id === id);
                    });
                }
            }

            return service;
        })
}(angular))