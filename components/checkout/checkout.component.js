(function (angular) {
    'use strict';
    let app = angular.module("eShopper");

    app.component('checkout', {
        templateUrl: 'components/checkout/checkout.template.html',
        controller: Controller
    });

    function Controller() {       

    }

}(angular))