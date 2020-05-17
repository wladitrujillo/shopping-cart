(function (angular) {
    'use strict';

    let app = angular.module('eShopper');
    app.component('cart', {
        templateUrl: 'components/cart/cart.template.html',
        controller: Controller
    });



    function Controller() {

        this.items = [
            {
                product: {
                    imgUrl: "images/cart/one.png",
                    name: "Colorblock Scuba",
                    description: "Web ID: 1089772",
                    price: 59,
                },
                count: 1

            }, {
                product: {
                    imgUrl: "images/cart/two.png",
                    name: "Colorblock Scuba",
                    description: "Web ID: 1089772",
                    price: 59,
                },
                count: 1

            }, {
                product: {
                    imgUrl: "images/cart/three.png",
                    name: "Colorblock Scuba",
                    description: "Web ID: 1089772",
                    price: 59,
                },
                count: 1

            }];

    }

}(angular))