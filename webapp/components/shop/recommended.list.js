(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('recommendedList', {
        templateUrl: 'components/shop/recommended.list.html',
        controller: ['ShopperService',function (ShopperService) {

            ShopperService.getRecommends().then(data => this.recommends = data)
        }]
    });   


}(angular))