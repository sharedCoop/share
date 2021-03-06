'use strict';

angular.module('shareApp')
  .controller('BoardCtrl', function ($scope, $rootScope, ngDialog) {
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
  .controller('TodoTaskListCtrl',
  function($scope, $http, Task) {
    Task.getTasks($http, null, "todo", function(err, res) {
      if (err) {
        alert(err);
      } else {
        $scope.tasks = res.tasks;
      }      
    });
    
    $scope.isShowCreateEdit = false;

    $scope.createNewTask = function() {
      console.log("create new task.");

      $scope.isShowCreateEdit = false;
      var index = $scope.tasks.length;
      console.log("index" + index);
      var task = {
        "title": $scope.todo,
        "id": "task_id_" + index++,
        "info": $scope.todo
      };
      
      // submit to server
      task.projectId = "all";
      task.status = "todo";
      Task.createTask($http, task, function(err, res) {
          if (err) {
            console.log(err);
            return;
          }
          $scope.tasks.push(task);
          $scope.todo = '';
        });
        // .catch( function(err) {
        //   err = err.data;
        //   $scope.errors = {};

        //   // Update validity of form fields that match the mongoose errors
        //   angular.forEach(err.errors, function(error, field) {
        //     form[field].$setValidity('mongoose', false);
        //     $scope.errors[field] = error.message;
        //   });
        // });
    };

    $scope.removeTask = function (index) {
      console.log("removeTask");
    //  console.log($scope.tasks[index]);
      
      Task.removeTask($http, $scope.tasks[index], "todo", function(err, res) {
        if (err) {
          alert(err);
        } else {
          console.log("removeTask");
          $scope.tasks.splice(index, 1);
        }      
      });
    };

    $scope.cancelCreatedTask = function() {
      console.log("cancel new task.");
      $scope.isShowCreateEdit = false;
    };

    $scope.showNewTask = function() {
      console.log("click new task.");
      $scope.isShowCreateEdit = true;

    };
    // $http.get('tasks/tasks.json').success(function(data) {
    //   $scope.tasks = task_data;
    // });

  //  $scope.orderProp = 'age';
  });

angular.module('shareApp')
.controller('DoingTaskListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.tasks = do_task_data;
    $scope.isShowCreateEdit = false;

    $scope.createNewTask = function() {
      console.log("create new task.");

      $scope.isShowCreateEdit = false;
      var index = $scope.tasks.length;
      console.log("index" + index);
      var task = {
        "title": $scope.doing,
        "id": "task_id_" + index++,
        "info": $scope.doing
      };
      $scope.tasks.push(task);
      $scope.doing = '';
    };

    $scope.removeTask = function (index) {
      console.log(index);
      $scope.tasks.splice(index, 1);
    };

    $scope.cancelCreatedTask = function() {
      console.log("cancel new task.");
      $scope.isShowCreateEdit = false;
    };

    $scope.showNewTask = function() {
      console.log("click new task.");
      $scope.isShowCreateEdit = true;

    };
  }]);

angular.module('shareApp')
.controller('ArchiveTaskListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.tasks = archive_task_data;
    $scope.isShowCreateEdit = false;

    $scope.createNewTask = function() {
      console.log("create new task.");

      $scope.isShowCreateEdit = false;
      var index = $scope.tasks.length;
      console.log("index" + index);
      var task = {
        "title": $scope.archive,
        "id": "task_id_" + index++,
        "info": $scope.archive
      };
      $scope.tasks.push(task);
      $scope.archive = '';
    };

    $scope.removeTask = function (index) {
      console.log(index);
      $scope.tasks.splice(index, 1);
    };

    $scope.cancelCreatedTask = function() {
      console.log("cancel new task.");
      $scope.isShowCreateEdit = false;
    };

    $scope.showNewTask = function() {
      console.log("click new task.");
      $scope.isShowCreateEdit = true;

    };

  }]);
var task_JSON = {
  "title": "",
  "id": "unique id",
  "info": "Detail infomation",
  "checkList": "check list",
  "members": ['',''],
  "creator": "Who did it create",
  "createTime": "created time",
  "label": "The classic of project",
  "dueDate": "End of time",
  "workLoad": 8,// "1|3|5|8|13",
  "projectId": "the index of project",
  "projectName": "project name",
  "status": "todo|doing|archive",
  "delay": ""
};
var archive_task_data = [];
var do_task_data = [];
var task_data=
[
  {
    "title": "Launch the project Shared Cooperation",
    "id": "task_id_001",
    "info": "Launch the project Shared Cooperation."
  },
  {
    "title": "Requirements doc",
    "id": "task_id_002",
    "info": "Write the requiremens, UI layout and features"
  },
  {
    "title": "Select the developed framework and techonlogy",
    "id": "task_id_003",
    "info": "Perpare to select the dev language, server environment and front techonlogy."
  },
  {
    "title": "Using angular JS to implement front end",
    "id": "task_id_004",
    "info": "Selected the Angular to view and controll UI."
  },
  {
    "title": "Write the design doc",
    "id": "task_id_005",
    "info": "To complete the design doc, It contains interface, the tables structure of database."
  },
  {
    "title": "Implement task board to list all tasks",
    "id": "task_id_006",
    "info": "Using angular JS MVC to implement the task board."
  },
];