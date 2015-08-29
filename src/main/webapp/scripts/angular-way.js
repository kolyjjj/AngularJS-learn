angular.module('app', ['ngRoute']);

angular.module('app')
        .config(['$routeProvider', function($routeProvider){
            $routeProvider
              .when('/pets', {
                templateUrl: 'views/pets.html',
                controller: 'petController'
              })
              .otherwise({
                redirectTo: '/pets'
              });
        }]);

angular.module('app')
        .controller('petController', ['$scope', 'petService', function($scope, petService){
            $scope.input = '';
            petService.pets().then(function(response){
                $scope.pets = response.data;
            });
        }])
        .factory('petService', ['$http', function($http){
            return {
                pets: pets
            };

            function pets(){
                return $http.get('/api/pets');
            }
        }]);
