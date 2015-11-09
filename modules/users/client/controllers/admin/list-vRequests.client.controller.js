'use strict';

angular.module('users').controller('VerifyListController', ['$scope', '$state', '$http', '$stateParams',
  function($scope, $state, $http, $stateParams){
    $scope.vRequests = {};
    $scope.vRequestsList = function() {
      $http.get('/api/auth/vList').success(function (res){
        $scope.vRequests = res;
        if($stateParams.vReqID === undefined){
          console.log("should be empty");
        }
        else{
          for(var i = 0; i < $scope.vRequests.length; i++){
            if($stateParams.vReqID === $scope.vRequests[i]._id){
              $scope.vRequest = $scope.vRequests[i];
              console.log($scope.vRequest);
            }
            else{continue;}
          }
        }
      }).error(function (response){
        $scope.error = response.message;
      });
    };
  }
]);
