angular.module('eShopper').component('sidebar', {
    templateUrl: 'components/sidebar/sidebar.template.min.html',
    controller: ['$scope', '$timeout',
        function ($scope, $timeout) {

            $scope.refreshSlider = function () {
                $timeout(function () {
                    $scope.$broadcast('rzSliderForceRender')
                })
            }

            $scope.refreshSlider();
            $scope.slider_draggable_range = {
                minValue: 0,
                maxValue: 200,
                options: {
                    ceil: 200,
                    floor: 0,
                    draggableRange: true
                }
            };

            $scope.categories = [
                {
                    name: "SportWear",
                    subcategory: ["Nike", "Under Armour", "Adidas", "Puma", "Aiscs"]
                },
                {
                    name: "Mens",
                    subcategory: ["Fendi", "Guess", "Valentino", "Dior",
                        "Versace", "Armani", "Prada", "Dolce And Gabbana",
                        "Chanel", "Gucci"]
                },
                {
                    name: "Womens",
                    subcategory: ["Fendi", "Guess", "Valentino", "Dior", "Versace"]
                },
                {
                    name: "Kids",
                    subcategory: []
                },
                {
                    name: "Fashion",
                    subcategory: []
                },
                {
                    name: "HOUSEHOLDS",
                    subcategory: []
                },
                {
                    name: "Interiors",
                    subcategory: []
                },
                {
                    name: "Clothing",
                    subcategory: []
                },
                {
                    name: "bags",
                    subcategory: []
                },
                {
                    name: "shoes",
                    subcategory: []
                }
            ];


            $scope.brands = [
                { name: "ACNE", total: 50 },
                { name: "GRUNDE ERDE", total: 56 },
                { name: "ALBIRO", total: 27 },
                { name: "RONHILL", total: 32 },
                { name: "ODDMOLLY", total: 5 },
                { name: "BOUDESTIJN", total: 9 },
                { name: "ROSCH CREATIVE CULTURE", total: 4 }];

        }

    ]
});



