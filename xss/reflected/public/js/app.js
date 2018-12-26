var ROOT_API = 'http://172.104.167.189:3004';

var app = angular.module('appHacker', ['ngCookies']);
app.controller('ctrlHacker', function ($scope, $http, $cookies) {

	$scope.init = function () {
		console.log('hacker viet', $cookies);
	}
});