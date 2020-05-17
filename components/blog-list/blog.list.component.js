(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('blogList', {
        templateUrl: 'components/blog-list/blog.list.template.html',
        controller: Controller
    });

    Controller.$inject = ['$scope'];

    function Controller($scope) {

    }


}(angular))