(function (angular) {
    'use strict';
    angular.module('eShopper')
        .service('CompanyService', function ($http) {
            var service = {              

                getInfo: () => {
                    return $http.get('data/company.json', { cache: true }).then(resp => {
                        return resp.data;
                    });
                }
            }

            return service;
        })
}(angular))