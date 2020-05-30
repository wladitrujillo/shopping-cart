(function (angular) {
    'use strict';
    angular.module('eShopper')
        .service('CompanyService', function ($http) {
            var service = {              

                getInfo: () => {
                    return $http.get('/shopper/info', { cache: true }).then(resp => {
                        return resp.data;
                    });
                }
            }

            return service;
        })
}(angular))