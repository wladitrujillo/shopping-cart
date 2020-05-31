(function (angular) {
    'use strict';
    let app = angular.module("eShopper");

    app.component('headerComponent', {
        templateUrl: 'components/header/header.template.html',
        controller: HeaderCtrl
    });

    HeaderCtrl.$inject = ['ShopperService', '$translate']

    function HeaderCtrl(service, $translate) {

        service.getInfo().then(data => this.company = data);

        this.changeLanguage = lang => {
            $translate.use(lang);
        }


        this.options = [
            /* { name: 'Account', href: '', icon: 'fa fa-user' },
             { name: 'Wishlist', href: '', icon: 'fa fa-star' },*/
            { name: 'Checkout', href: 'checkout', icon: 'fa fa-crosshairs' },
            { name: 'Carrito', href: 'cart', icon: 'fa fa-shopping-cart' },
            { name: 'Login', href: 'login', icon: 'fa fa-lock' }];

        this.menu = [

            {
                name: "Inicio",
                href: "home"
            },
            {
                name: "Compras",
                href: "",
                hasChilds: true,
                childs: [
                    { name: "Productos", href: "product-list" },
                    { name: "Checkout", href: "checkout" },
                    { name: "Carrito", href: "cart" },
                    { name: "Login", href: "login" }]
            },
            {
                name: "Blog",
                href: "blogger"
            },
            {
                name: "Contact",
                href: "contact"
            }
        ]
    }
}(angular))