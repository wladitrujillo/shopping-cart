(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('loginComponent', {
        templateUrl: 'components/login/login.template.html',
        controller: Controller
    });

    Controller.$inject = ['$scope'];

    function Controller($scope) {

    }


}(angular))