angular.module('app', []);

angular.module('app')
        .controller('oneController', ['$scope', 'petService', function($scope, petService){
            $scope.input = '';
            petService.pets();
        }])
        .factory('petService', ['$http', function($http){
            return {
                pets: pets
            };

            function pets(){
                $http.get('/api/pets').then(function(response){
                    console.log('pets', response.data);
                });
            }
        }]);
