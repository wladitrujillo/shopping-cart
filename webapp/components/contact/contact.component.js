(function (angular) {
    'use strict';
    let app = angular.module("eShopper");

    app.component('contact', {
        templateUrl: 'components/contact/contact.template.html',
        controller: Controller
    });

    Controller.$inject = ['ShopperService']

    function Controller(service) {

        service.getInfo().then(data => this.company = data);


        this.emailBody = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };

        this.sendEmail = (emailBody) => {
            service.sendEmail(emailBody)
                .then(response => {
                    console.log(response)
                }).catch(error => {
                    console.error(error);
                });
        }

        var map;

        map = new GMaps({
            el: '#gmap',
            lat: 43.1580159,
            lng: -77.6030777,
            scrollwheel: false,
            zoom: 14,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = 'images/map-icon.png';
        map.addMarker({
            lat: 43.1580159,
            lng: -77.6030777,
            //icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#ffffff',
        });

        var styles = [

            {
                "featureType": "road",
                "stylers": [
                    {
                        "color": ""
                    }
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#A2DAF2"
                    }
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {
                        "color": "#ABCE83"
                    }
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {
                        "color": "#2ECC71"
                    }
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {
                        "saturation": 1
                    },
                    {
                        "weight": 0.1
                    },
                    {
                        "color": "#111111"
                    }
                ]
            }

        ];

        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

}(angular))