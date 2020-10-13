app.controller('mainCtrl', function($scope, $translate) {

	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};

    $scope.isNull = isNull;
	$scope.isNotNull = isNotNull;
	$scope.isBlank = isBlank;
	$scope.isNotBlank = isNotBlank;
	$scope.isEmpty = isEmpty;
	$scope.isNotEmpty = isNotEmpty;
	$scope.eq = eq;
	$scope.notEq = notEq;
	$scope.not = not;

});
