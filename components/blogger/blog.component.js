(function (angular) {
    'use strict';

    let app = angular.module('eShopper');

    app.component('blog', {
        templateUrl: 'components/blogger/blog.template.html',
        controller: Controller
    });

    function Controller() {

    }


}(angular))