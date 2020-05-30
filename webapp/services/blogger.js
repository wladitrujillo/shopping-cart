(function (angular) {
    'use strict';
    angular.module('eShopper')
        .service('BloggerService', function ($http) {
            var service = {
                getAll: () => {
                    return $http.get('data/blogs.json', { cache: true }).then(resp => {
                        return resp.data;
                    });
                },

                get: id => {

                    return service.getAll().then(blogs => {
                        return blogs.find(blog => blog.id == id);
                    });
                }
            }

            return service;
        })
}(angular))