var app = angular.module('dragDrop', []);

app.controller('DragDropCtrl', function($scope) {
	$scope.leftDrop = function() {
	//	alert('Dropped in left bin');
	}

});

app.directive('draggable', function() {
  return function(scope, element) {
      var el = element[0];

      el.draggable = true;

      el.addEventListener('dragstart', function(e) {
        e.dataTransfer.effectAllowed = 'move';
  //      e.dataTransfer.clearData('task');
        data_transfer = [];
        // console.log(e);
        // console.log(scope.task);
        // e.dataTransfer.setData('task', scope.task);
        data_transfer.push(scope.task);
        // var item = e.dataTransfer.getData('task');

        this.classList.add('drag');
        return false;
      }, false);

      el.addEventListener('dragend', function(e) {
        this.classList.remove('drag');
        // remove the task from original task list
        var tasks = scope.$parent.tasks;
        console.log("delete original task");
        console.log(scope.$parent);
        console.log(scope.$parent.tasks);
        for (var i=0; i<tasks.length; i++) {
          if (tasks[i].id == data_transfer[0].id) {
            tasks.splice(i, 1);
          }
        }
        return false;
      }, false);
    }
});

var data_transfer = [];

app.directive('droppable', function() {
  return {
    scope: {
      drop: '&',
    },
    link: function(scope, element, attributes) {
      var el = element[0];
      el.addEventListener('dragover', function(e) {
        e.dataTransfer.dropEffect = 'move';
        if (e.preventDefault) e.preventDefault(); // allows us to drop
        this.classList.add('over');
        return false;
      }, false);

      el.addEventListener('dragenter', function(e) {
        this.classList.add('over');
        
        return false;
      }, false);

      el.addEventListener('dragleave', function(e) {
        this.classList.remove('over');
        return false;
      }, false);

      el.addEventListener('drop', function(e) {
        if (e.stopPropagation) e.stopPropagation(); // Stops some browsers from redirecting.
        this.classList.remove('over');
        // console.log("element!!!");
        // console.log(element);
        // console.log("e!!!");
        // console.log(e);
         console.log(e.dataTransfer);
        // console.log("scope!!!");
        // console.log(scope);
        var item = data_transfer[0];
        console.log("task!!!");
        console.log(item);
        console.log(item.title + "  " + item.info);
        scope.$parent.tasks.push(item);
        //this.appendChild(item);

        //scope.$apply('drop()');

        return false;
      }, false);
    }
  }
});


app.controller('TodoTaskListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.tasks = task_data;
    $scope.isShowCreateEdit = false;

    $scope.createNewTask = function() {
      console.log("create new task.");
      $scope.isShowCreateEdit = false;
      var task = {
        "title": "Create new task for testing",
        "id": "task_id_10",
        "info": "Create new task for testing."
      };
      $scope.tasks.push(task);
    }
    $scope.cancelCreatedTask = function() {
      console.log("cancel new task.");
      $scope.isShowCreateEdit = false;
    }

    $scope.showNewTask = function() {
      console.log("click new task.");
      $scope.isShowCreateEdit = true;

    }
    // $http.get('tasks/tasks.json').success(function(data) {
    //   $scope.tasks = task_data;
    // });

  //  $scope.orderProp = 'age';
  }]);

app.controller('DoingTaskListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.tasks = do_task_data;
    $scope.isShowCreateEdit = false;

    $scope.createNewTask = function() {
      console.log("create new task.");
      $scope.isShowCreateEdit = false;
      var task = {
        "title": "Create new task for testing",
        "id": "task_id_10",
        "info": "Create new task for testing."
      };
      $scope.tasks.push(task);
    }
    $scope.cancelCreatedTask = function() {
      console.log("cancel new task.");
      $scope.isShowCreateEdit = false;
    }

    $scope.showNewTask = function() {
      console.log("click new task.");
      $scope.isShowCreateEdit = true;

    }
  }]);

app.controller('ArchiveTaskListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.tasks = archive_task_data;
    $scope.isShowCreateEdit = false;

    $scope.createNewTask = function() {
      console.log("create new task.");
      $scope.isShowCreateEdit = false;
      var task = {
        "title": "Create new task for testing",
        "id": "task_id_10",
        "info": "Create new task for testing."
      };
      $scope.tasks.push(task);
    }
    $scope.cancelCreatedTask = function() {
      console.log("cancel new task.");
      $scope.isShowCreateEdit = false;
    }

    $scope.showNewTask = function() {
      console.log("click new task.");
      $scope.isShowCreateEdit = true;

    }
  }]);
// app.directive('showtaskedit', function() {
//   console.log("1");
//   return {

//     link: function($scope, element, attrs) {
//       console.log($scope);
//   //    scope.task.isShowEdit = false;
//       element.bind('mouseenter', function() {
//         // console.log("enter");
//         // console.log(element.children(".task_tool_edit"));
//         // var ed = element.children(".task_tool_edit");
//         // console.log(ed);
//         $scope.task.isShowEdit = true;
//         console.log($scope);
//       });

//       element.bind('mouseleave', function() {
//         // var ed = $(element[0].childNodes[5]);
//         // ed.hide();
//         $scope.task.isShowEdit = false;
//         console.log($scope);
//       });
//     }
//   }
// });
archive_task_data = [];
do_task_data = [];
task_data=
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