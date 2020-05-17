(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('blogger', {
        bindings: { blogs: '<' },
        templateUrl: 'components/blogger/blogger.template.html',
        controller: Controller
    });

    function Controller() {


    }


}(angular))