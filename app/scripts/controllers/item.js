'use strict';

angular.module('MKDesignApp')
  .controller('ItemCtrl', function ($scope, $routeParams, catalog, $route, image) {

  		$scope.items = catalog.get();
		$scope.item = $scope.items[$routeParams.id];
		
		$scope.currentImage = $scope.item.images[image.get()];

		$scope.changeImage = function(smallImage) {
  	 		for (var i = 0; i < $scope.items.length; i++) {
  	 			for (var j = 0; j < $scope.items[i].images.length; j++) {
  	 				if ($scope.items[i].images[j].small == smallImage) {
  	 					$scope.currentImage = $scope.items[i].images[j];
  	 					$scope.currentImageIndex = j;
  	 					image.set(j);
  	 					$route.reload();
  	 				}
  	 			}
  	 		}
 		};
  });
