(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('recommendedList', {
        templateUrl: 'components/shop/recommended.list.min.html',
        controller: RecommendedListCtrl
    });

    RecommendedListCtrl.$inject = ['ShopperService'];

    function RecommendedListCtrl(ShopperService) {

        ShopperService.getRecommends().then(data => this.recommends = data)
    }


}(angular))