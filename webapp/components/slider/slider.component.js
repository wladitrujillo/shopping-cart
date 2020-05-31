(function (angular) {
    'use strict';

    let app = angular.module('eShopper');
    app.component('slider', {
        templateUrl: 'components/slider/slider.template.min.html',
        controller: Controller
    });


    Controller.$inject = ['ShopperService']

    function Controller(service) {


        service.getSliders().then(data => this.sliders = data)



    }

}(angular))