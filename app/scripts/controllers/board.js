'use strict';

angular.module('testApp')
  .controller('BoardCtrl', function ($scope, $http, Task) {
    console.log("Enter White board!");
    console.log(Task);
    $http.get('api/tasks').success(function(tasks_data) {
      console.log(tasks_data);
    });
  });

angular.module('testApp')
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
      $scope.tasks.push(task);
      $scope.todo = '';
      // submit to server
      task_JSON.title = task.title;
      task_JSON.id = task.id;
      task_JSON.info = task.info;
      Task.createTask($http, task_JSON)
        .then( function() {
          // Account created, redirect to home
          console.log("createNewTask then....");
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
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
    // $http.get('tasks/tasks.json').success(function(data) {
    //   $scope.tasks = task_data;
    // });

  //  $scope.orderProp = 'age';
  });

angular.module('testApp')
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

angular.module('testApp')
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
  "create_time": "created time",
  "label": "The classic of project",
  "due_date": "End of time",
  "workLoad": 8,// "1|3|5|8|13",
  "project_id": "the index of project",
  "project_name": "project name",
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