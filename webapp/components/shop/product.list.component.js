
(function (angular) {
    'use strict';

    let app = angular.module('eShopper');

    app.component('productList', {
        templateUrl: 'components/shop/product.list.template.html',
        controller: Controller
    });

    Controller.$inject = ['ShoppingCartService', 'ProductService']

    function Controller(ShoppingCartService, ProductService) {

        this.paginationOptions = {
            currentPage: 1,
            pageSize: 6,
            sort: null
        };


        this.setCurrentPage = page => {

            this.paginationOptions.currentPage = page;

            ProductService
                .getAll(page, this.paginationOptions.pageSize)
                .then(response => {
                    this.products = response.data;
                    this.total = response.headers()['x-total-count'];
                    this.totalPages = Math.ceil(this.total / this.paginationOptions.pageSize);
                    this.pages = [];
                    for (var i = 1; i <= this.totalPages; i++) {
                        this.pages.push(i);
                    }
                })
                .catch(err => onError(err));
        }


        this.setCurrentPage(1);

        this.addToCart = item => ShoppingCartService.add(item);

        let onError = err => console.error(err);


    }


}(angular))