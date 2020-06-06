
angular.module("eShopper")
    .component('footerComponent', {
        templateUrl: 'components/footer/footer.template.html',
        controller: ['ShopperService', function (ShopperService) {
            ShopperService.getInfo().then(data => this.company = data);
        }
        ]
    });


