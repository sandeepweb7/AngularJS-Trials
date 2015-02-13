var myapp = angular.module("myapp",[]);

myapp.controller('ParentCtrl', ['$scope', function ($scope) {
	this.name = "ParentCtrl";
	console.log('parent..');
	console.log($scope.$id);
	this.parentMethod = function(){
		console.log('parent method');
	};
}]);

myapp.controller('ChildCtrl', ['$controller','$scope', Child]);

function Child($controller, $scope) {
	// var parentCtrl = $controller('ParentCtrl', {});
	// Child.prototye = Object.create(parentCtrl);
	// Child.prototype.constructor = Child;
	//this.name="ChildCtrl";
	//this.parentMethod();	
	console.log($scope.$id);
	var controller = $controller('ParentCtrl', {$scope: $scope});
    angular.extend(this, controller);
    this.name = 'ChildCtrl';
    this.parentMethod();
}


// myapp.directive('parentComp', [function () {
// 	return {
// 		restrict: 'A',
// 		scope: {},
// 		controller: 'ParentCtrl'
// 	};
// }]);

myapp.directive('childComp', [function () {
	return {
		restrict: 'A',
		controller: 'ChildCtrl',
		controllerAs: 'child',
		scope: {},
		bindToController: true
	};
}]);