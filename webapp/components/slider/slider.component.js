
angular.module('eShopper')
    .component('slider', {
        templateUrl: 'components/slider/slider.template.min.html',
        controller: ['ShopperService', function (service) {
            service.getSliders().then(data => this.sliders = data);
        }]
    });



