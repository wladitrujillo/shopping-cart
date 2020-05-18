(function (angular) {
    'use strict';
    let app = angular.module("eShopper");

    app.component('contact', {
        templateUrl: 'components/contact/contact.template.html',
        controller: Controller
    });

    function Controller(CompanyService) {

        CompanyService.getInfo().then(data => this.company = data);
    }

}(angular))