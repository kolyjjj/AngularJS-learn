angular.module('app', ['ngRoute']);

angular.module('app')
        .config(['$routeProvider', 'petServiceProvider', function($routeProvider, petServiceProvider){
            petServiceProvider.setUrl('http://localhost:8080/api');

            $routeProvider
              .when('/pets', {
                templateUrl: 'views/pet/pets.html',
                controller: 'petsController'
              })
              .when('/pets/:id', {
                templateUrl: 'views/pet/detail.html',
                controller: 'petController'
              })
              .otherwise({
                redirectTo: '/pets'
              });
        }]);

angular.module('app')
        .controller('petsController', ['$scope', 'petService', '$routeParams', function($scope, petService, $routeParams){
            $scope.input = '';
            petService.pets().then(function(response){
                $scope.pets = response.data;
            });
        }])
        .controller('petController', ['$scope', 'petService', '$routeParams', '$location', function($scope, petService, $routeParam, $location){
            petService.pet($routeParam.id).then(function(response){
                $scope.pet = response.data;
            });
            $scope.back = function(){
                $location.path('pets');
            };
        }])
        .provider('petService', function(){
            var url = 'http://localhost:8080/';

            this.setUrl = function(val) {
                url = val;
            };

            this.$get = ['$http', function($http){
                return {
                    pets: pets,
                    pet: pet
                };

                function pets(){
                    return $http.get(url + '/pets');
                }

                function pet(id) {
                    return $http.get(url + '/pets/' + id);
                }
            }];
        });
//        .factory('petService', ['$http', function($http){
//            return {
//                pets: pets,
//                pet: pet
//            };
//
//            function pets(){
//                return $http.get('/api/pets');
//            }
//
//            function pet(id) {
//                return $http.get('/api/pets/' + id);
//            }
//        }]);
