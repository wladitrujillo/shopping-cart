(function (angular) {
    'use strict'
    let app = angular.module("eShopper");

    app.component('homeComponent', {
        templateUrl: 'components/home/home.template.html',
        controller: HomeCtrl
    });

    HomeCtrl.$inject = ['$scope'];

    function HomeCtrl($scope) {

        $scope.header = {
            phone: "+2 95 01 88 821",
            email: "info@domain.com"
        };


    }


}(angular))