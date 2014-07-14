'use strict';

angular.module('shareApp')
	.controller('OpenTaskDialogCtrl', function ($scope, $rootScope, ngDialog) {
		$rootScope.theme = 'ngdialog-theme-default';

		$scope.openDialog = function () {
			ngDialog.open({ template: 'partials/dialog_template.html', controller: 'DialogCtrl' });
			// ngDialog.open({ template: 'dialog_template.html', controller: 'DialogCtrl', taskObj: $rootScope.taskData});
		};
		

		$rootScope.$on('ngDialog.opened', function (e, $dialog) {
			console.log('ngDialog opened: ' + $dialog.attr('id'));
		});

		$rootScope.$on('ngDialog.closed', function (e, $dialog) {
			console.log('ngDialog closed: ' + $dialog.attr('id'));
		});
	});

angular.module('shareApp')
	.controller('DialogCtrl', function ($scope, ngDialog) {
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
    console.log("dialog is opened?");

	});