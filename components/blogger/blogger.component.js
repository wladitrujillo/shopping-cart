(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('blogger', {
        templateUrl: 'components/blogger/blogger.template.html',
        controller: Controller
    });

    Controller.$inject = ['$scope'];

    function Controller($scope) {

    }


}(angular))