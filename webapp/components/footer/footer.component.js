(function (angular) {
    'use strict'
    let app = angular.module("eShopper");

    app.component('footerComponent', {
        templateUrl: 'components/footer/footer.template.min.html',
        controller: FooterCtrl
    });

    FooterCtrl.$inject = ['ShopperService'];

    function FooterCtrl(ShopperService) {
        ShopperService.getInfo().then(data => this.company = data);
    }


}(angular))