
angular.module("eShopper")
    .component('contact', {
        templateUrl: 'components/contact/contact.template.html',
        controller: ['ShopperService', function (service) {

            let map = {};

            service.getInfo().then(data => {
                this.company = data;
                showMap(this.company.position);
            });


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


            function showMap(position) {



                map = new GMaps({
                    el: '#gmap',
                    lat: position.latitude,
                    lng: position.longitude,
                    scrollwheel: false,
                    zoom: 14,
                    zoomControl: false,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    clickable: false
                });


                addMarker(position, map)

                showCurrentPosition()

            }



            function showCurrentPosition() {


                if (navigator.geolocation) {

                    navigator.geolocation.getCurrentPosition(position => {


                        var lat = Number(position.coords.latitude);
                        var lng = Number(position.coords.longitude);



                        // map.setCenter(new google.maps.LatLng(lat, lng));

                        addMarker(position.coords, map, "Tu Estas Aqui")


                    });
                } else {
                    console.error("Geolocation is not supported by this browser.");
                }


            }


            // Adds a marker to the map.
            function addMarker(location, map, label) {
                // Add the marker at the clicked location, and add the next-available label
                // from the array of alphabetical characters.


                map.addMarker({
                    lat: location.latitude,
                    lng: location.longitude,
                    //icon: image,
                    label: label ? label : '',
                    animation: google.maps.Animation.DROP,
                    verticalAlign: 'bottom',
                    horizontalAlign: 'center',
                    backgroundColor: '#ffffff',
                });

            }




        }]
    });

