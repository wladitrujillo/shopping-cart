(function (angular) {
    'use strict'
    let app = angular.module("eShopper");

    app.component('footerComponent', {
        templateUrl: 'components/footer/footer.template.html',
        controller: FooterCtrl
    });

    function FooterCtrl() {
      
    }


}(angular))