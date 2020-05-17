(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('productList', {
        templateUrl: 'components/product-list/product.list.html',
        controller: Controller
    });

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        $scope.products = [{
            imgUrl: "images/home/product1.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        },
        {
            imgUrl: "images/home/product2.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        }, {
            imgUrl: "images/home/product3.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        },
        {
            imgUrl: "images/home/product4.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        },
        {
            imgUrl: "images/home/product5.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        }, {
            imgUrl: "images/home/product6.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        }, {
            imgUrl: "images/shop/product7.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        },
        {
            imgUrl: "images/shop/product8.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:true

        }, {
            imgUrl: "images/shop/product9.jpg",
            price: 56,
            description: 'Easy Polo Black Edition', 
            isNew:true,
            isSale:false

        },
        {
            imgUrl: "images/shop/product10.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        },
        {
            imgUrl: "images/shop/product11.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        }, {
            imgUrl: "images/shop/product12.jpg",
            price: 56,
            description: 'Easy Polo Black Edition',
            isNew:false,
            isSale:false

        }];


    }


}(angular))