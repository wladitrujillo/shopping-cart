(function (angular) {
    'use strict';

    let app = angular.module('eShopper');

    app.component('blogList', {
        bindings: { blogs: '<' },
        templateUrl: 'components/blogger/blog.list.template.min.html',
        controller: Controller
    });

    function Controller() {

    }

}(angular))