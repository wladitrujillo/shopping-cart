(function (angular) {
    'use strict';

    let app = angular.module('eShopper');

    app.component('blogList', {
        bindings: { blogs: '<' },
        templateUrl: 'components/blogger/blog.list.template.html',
        controller: Controller
    });

    function Controller() {

    }

}(angular))