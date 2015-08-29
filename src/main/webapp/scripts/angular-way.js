angular.module('app', []);

angular.module('app')
        .controller('oneController', ['$scope', '$http', function($scope, $http){
            $scope.input = '';
            $http.get('/api/pets').then(function(response){
                console.log('pets', response.data);
            });
        }]);