(function (angular) {
    'use strict';
    angular.module('eShopper')
        .service('ProductService', ProductService);
    ProductService.$inject = ['$http'];
    function ProductService($http) {
        var service = {
            getAll: (page, perPage) =>
                $http.get('/product?page=' + (page ? page : 1) + '&per_page=' + (perPage ? perPage : 6),
                    { cache: false })
                    .then(response => response),
            get: id =>
                $http.get('/product/' + id,
                    { cache: true })
                    .then(resp => resp.data)
        }

        return service;
    }

}(angular))