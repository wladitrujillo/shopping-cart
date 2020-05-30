(function (angular) {
    'use strict';
    angular.module('eShopper')
        .service('ProductService', function ($http) {
            var service = {
                getAll: () =>
                    $http.get('/product', { cache: true }).then(resp => resp.data),
                get: id =>
                    $http.get('/product/' + id, { cache: true }).then(resp => resp.data)
            }

            return service;
        })
}(angular))