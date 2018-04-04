(function () {
'use strict';
angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.items = "";
  $scope.message = "";

  $scope.displayMessage = function () {
      if($scope.items =="")
      {
          $scope.message="Please enter data first";
      }else
      {
         var totalItems = calculateNumberOfItems($scope.items);
             if (totalItems <= 3) {
              $scope.message = "Enjoy!";
             }
             else 
              {
            $scope.message = "Too much!";
              }
        
        }

  };

  function calculateNumberOfItems(string) {
    var arrayLength = string.split(',').length;
    return arrayLength;
  }

});
})();