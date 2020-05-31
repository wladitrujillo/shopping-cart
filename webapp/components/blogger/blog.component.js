(function (angular) {
    'use strict';

    let app = angular.module('eShopper');

    app.component('blog', {
        bindings: { blog: '<' },
        templateUrl: 'components/blogger/blog.template..min.html',
        controller: Controller
    });

    function Controller() {

    }

}(angular))