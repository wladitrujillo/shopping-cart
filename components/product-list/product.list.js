(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('productList', {
        templateUrl: 'components/product-list/product.list.html',
        controller: ItemListCtrl
    });

    ItemListCtrl.$inject = ['$scope'];

    function ItemListCtrl($scope) {

        $scope.items = [{
            imgUrl: "images/home/product1.jpg",
            price: 56,
            description:'Easy Polo Black Edition',
            
        },
        {
            imgUrl: "images/home/product2.jpg",
            price: 56,
            description:'Easy Polo Black Edition',
            
        },{
            imgUrl: "images/home/product3.jpg",
            price: 56,
            description:'Easy Polo Black Edition',
            
        },
        {
            imgUrl: "images/home/product4.jpg",
            price: 56,
            description:'Easy Polo Black Edition',
            
        },
        {
            imgUrl: "images/home/product5.jpg",
            price: 56,
            description:'Easy Polo Black Edition',
            
        },{
            imgUrl: "images/home/product6.jpg",
            price: 56,
            description:'Easy Polo Black Edition',
            
        }];


    }


}(angular))