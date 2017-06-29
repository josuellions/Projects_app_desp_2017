window.AngularApp = angular.module('angular-app', []);

AngularApp.controller('UserCtrl', function($scope, $http){

	$scope.list = [{}]

	$scope.addAddress = function(newDespesa) {
		$scope.list.push(JSON.parse(JSON.stringify(newDespesa)));
	}

	console.log($scope);
});