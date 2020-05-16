(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('categorySelector', {
        templateUrl: 'components/category-selector/category.selector.html',
        controller: CategorySelectorCtrl  
    });

    CategorySelectorCtrl.$inject = ['$scope'];

    function CategorySelectorCtrl($scope) {

    }


}(angular))