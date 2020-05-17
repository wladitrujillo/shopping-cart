(function (angular) {
    'use strict';

    let app = angular.module('eShopper');
    app.component('slider', {
        templateUrl: 'components/slider/slider.template.html',
        controller: Controller
    });

    Controller.$inject = ['$scope'];

    function Controller($scope) {

    }

}(angular))