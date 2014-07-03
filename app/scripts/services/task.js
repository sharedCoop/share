'use strict';


String.prototype.format = function() {
  var formatted = this;
  for (var i = 0; i < arguments.length; i++) {
    var regexp = new RegExp('\\{'+i+'\\}', 'gi');
    formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};

angular.module('shareApp')
.factory('Task', function Task($location, $rootScope, Session, User, $cookieStore) {
    // Get currentUser from cookie
    $rootScope.currentUser = $cookieStore.get('user') || null;
    $cookieStore.remove('user');

    return {

      getTasks: function($http, projectId, boardType, callback) {
        var cb = callback || angular.noop;
        // var params = "projectId={0}, boardType={1}, user={2}"
        //   .format(projectId ||'all', boardType, $rootScope.currentUser);
        var params = {
          projectId: projectId ||'all',
          boardType: boardType,
          user: $rootScope.currentUser
        };
        $http({
          method: 'GET',
          url: 'api/tasks',
          params: params
          // headers: {'Authorization': 'Token token=xxxxYYYYZzzz'} ???
        }).success(function(data) {
          // With the data succesfully returned, call our callback
          cb(null, data);
        }).error(function(data) {
          console.log(data);
          cb("Function getTasks error.");
        });
  },

  createTask: function($http, task_JSON, callback) {
        // $http.get('/api/awesomeThings').success(function(awesomeThings) {
      //   $scope.awesomeThings = awesomeThings;
      var cb = callback || angular.noop;
      $http({
        method: 'post',
        url: 'api/task/createTask',
        data: task_JSON
      }).success(function(resp) {
        if (!resp.error) {
          console.log("Function createTask error.");
          cb(resp.error);
        } else {
          console.log("create task successfully.");
          cb(null);
        }

      }).error(function() {
        console.log("Function createTask error.");
        cb("Function createTask error.");
      });
  },

  updateTask: function($http, task_JSON, callback) {
    var cb = callback || angular.noop;
    $http({
      method: 'post',
      url: 'api/task/update_task',
      data: task_JSON
    }).success(function(resp) {
      if (!resp.error) {
        console.log("Function UpdateTask error.");
        cb(resp.error);
      } else {
        console.log("Update task successfully.");
        cb(null);
      }

    }).error(function() {
      console.log("Function UpdateTask error.");
      cb("Function UpdateTask error.");
    });
  },

  removeTask: function($http, task_JSON, callback) {
    var cb = callback || angular.noop;
    $http({
      method: 'post',
      url: 'api/task/remove_task',
          data: task_JSON  // task_id
      }).success(function(resp) {
        if (!resp.error) {
          console.log("Function RemoveTask error.");
          cb(resp.error);
        } else {
          console.log("Remove task successfully.");
          cb(null);
        }

      }).error(function() {
        console.log("Function RemoveTask error.");
        cb("Function RemoveTask error.");
      });
  },
};

});


// design the detail format task_JSON
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
  "workLoad": 8,
  "project_id": "the index of project",
  "project_name": "project name",
  "status": "todo|doing|archive",
  "delay": ""
};
