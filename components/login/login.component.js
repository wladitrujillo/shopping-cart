(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('login', {
        templateUrl: 'components/login/login.template.html',
        controller: Controller
    });

    function Controller() {

    }


}(angular))