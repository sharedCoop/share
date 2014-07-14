'use strict';

angular.module('shareApp')
	.controller('DialogCtrl', function ($scope, ngDialog) {
		$scope.dialogModel = {
		    message : 'message from passed scope'
		};

		$scope.cancel = function() {
			var $id = ngDialog.$result.attr('id');
			ngDialog.close($id);
			return;
		};

		$scope.save = function() {

		};

		$scope.editTitle = function() {
			$scope.title_can_edit = true;
			this.task_title = "The title of resource.";
		};
		$scope.submitTitle = function() {
			this.title_can_edit = false;
		};
    console.log("dialog is opened?");

	});