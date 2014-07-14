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

		$scope.editInfo = function() {
			$scope.info_can_edit = true;
			this.task_detail_info = "The info of resource.";
		};
		$scope.submitDescription = function() {
			this.info_can_edit = false;
		};

    console.log("dialog is opened?");
	});