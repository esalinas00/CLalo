define(['./module'], function (directives) {
	'use strict';
	directives.directive('header', function() {
		return {
			restrict: 'E',
			templateUrl: 'layout/index.html'
		};
	});
});