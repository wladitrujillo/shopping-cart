(function (angular) {
    'use strict'
    let app = angular.module("eShopper");

    app.component('home', {
        templateUrl: 'components/home/home.template.html',
        controller: HomeCtrl
    });

    function HomeCtrl() {     


    }

}(angular))