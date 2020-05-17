(function (angular) {
    'use strict';
    let app = angular.module("eShopper");

    app.component('contact', {
        templateUrl: 'components/contact/contact.template.html',
        controller: Controller
    });
 
    function Controller() {       

    }
    
}(angular))