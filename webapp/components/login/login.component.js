(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('login', {
        templateUrl: 'components/login/login.template.min.html',
        controller: Controller
    });

    function Controller() {

    }


}(angular))