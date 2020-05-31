(function (angular) {
    'use strict';
    angular.module('eShopper')
        .service('BloggerService',BloggerService);
    BloggerService.$inject = ['$http'];
    function BloggerService($http) {
        var service = {
            getAll: () => $http.get('/blog', { cache: true }).then(resp => resp.data),
            get: id => $http.get('/blog/' + id, { cache: true }).then(resp => resp.data)
        }
        return service;
    }
}(angular))