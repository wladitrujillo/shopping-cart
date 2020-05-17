(function (angular) {
    'use strict';
    let app = angular.module("eShopper");

    app.component('checkout', {
        templateUrl: 'components/checkout/checkout.template.html',
        controller: Controller
    });

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        $scope.header = {
            phone: "+2 95 01 88 821",
            email: "info@domain.com"
        };

    }
}(angular))