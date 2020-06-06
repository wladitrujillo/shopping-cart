
angular.module('eShopper')
    .component('slider', {
        templateUrl: 'components/slider/slider.template.html',
        controller: ['ShopperService', function (service) {
            service.getSliders().then(data => this.sliders = data);
        }]
    });



