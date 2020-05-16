(function (angular) {
    'use strict';

    let app = angular.module('eShopper');
    app.component('sliderComponent', {
        templateUrl: 'components/slider/slider.template.html',
        controller: SliderCtrl
    });

    SliderCtrl.$inject = ['$scope'];

    function SliderCtrl($scope) {

    }

}(angular))