'use strict';

var app = angular.module('shareApp', ['ngDialog']);

	app.controller('OpenTaskDilalogCtrl', function ($scope, $rootScope, ngDialog) {
		$rootScope.taskData = {
			_id: "abcdefghijk",
			title: "For testing dialog",
			desp: "",
			status: "todo"
		};
		$rootScope.theme = 'ngdialog-theme-default';

		$scope.open = function () {
			//ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl' });
			ngDialog.open({ template: 'dialog_template.html', controller: 'DialogCtrl', taskObj: $rootScope.taskData});
		};		

		$rootScope.$on('ngDialog.opened', function (e, $dialog) {
			console.log('ngDialog opened: ' + $dialog.attr('id'));
		});

		$rootScope.$on('ngDialog.closed', function (e, $dialog) {
			console.log('ngDialog closed: ' + $dialog.attr('id'));
		});
	});

	app.controller('DialogCtrl', function ($scope, ngDialog) {
		$scope.dialogModel = {
		    message : 'message from passed scope'
		};
		$scope.editTitle = function() {
			$scope.title_can_edit = true;
			this.task_title = "The title of resource.";
		};
		$scope.submitTitle = function() {
			this.title_can_edit = false;
		};
		$scope.editInfo = function() {
			$scope.info_can_edit = true;
			this.task_detail_info = "The info of resource.";
		};
		$scope.submitDescription = function() {
			this.info_can_edit = false;
		};

    console.log("dialog is opened?");
	});