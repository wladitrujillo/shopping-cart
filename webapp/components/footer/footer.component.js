
angular.module("eShopper")
    .component('footerComponent', {
        templateUrl: 'components/footer/footer.template.min.html',
        controller: ['ShopperService', function (ShopperService) {
            ShopperService.getInfo().then(data => this.company = data);
        }
        ]
    });


