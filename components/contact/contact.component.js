(function (angular) {
    'use strict';
    let app = angular.module("eShopper");

    app.component('contact', {
        templateUrl: 'components/contact/contact.template.html',
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