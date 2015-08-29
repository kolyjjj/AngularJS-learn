angular.module('app', []);

angular.module('app')
        .controller('oneController', ['$scope', 'petService', function($scope, petService){
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
