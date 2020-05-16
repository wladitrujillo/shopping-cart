(function (angular) {
    'use strict'
    let app = angular.module("eShopper");

    app.component('categoryTab', {
        templateUrl: 'components/category-tab/category.tab.html',
        controller: CategoryTabCtrl
    });

    CategoryTabCtrl.$inject = ['$scope'];

    function CategoryTabCtrl($scope) {

        $scope.header = {
            phone: "+2 95 01 88 821",
            email: "info@domain.com"
        };

       
    }


}(angular))