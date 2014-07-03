'use strict';

var data_transfer = [];
angular.module('shareApp')
  .directive('draggable', function() {
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
angular.module('shareApp')
.directive('droppable', function() {
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