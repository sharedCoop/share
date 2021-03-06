'use strict';

var mongoose = require('mongoose'),
    TaskModel = mongoose.model('Tasks'),
    passport = require('passport');


/**
* Quary all tasks
*
*/
exports.listTasks = function(req, res, next) {
  var con = {};
  var taskList = [];
	con.projectId = req.query.projectId;
	con.status = req.query.boardType;
	//con.user = req.query.currentUser;
	TaskModel.find(con, function (err, docs) {
		if (err) {
      console.log(err);
      return next(err);
    }
    if (!docs) return res.send(404);
    console.log(docs);
    for (var item in docs) {
      taskList.push(docs[item]);
    }
  //  console.log("listTasks............");
    return res.json({tasks:taskList});
	});
};

exports.createTask = function(req, res, next) {
  console.log("createTask");
	var task = new TaskModel(req.body);
  console.log(task);
  task.save(function (err) {
    if (err) return res.json(400, err);

    return res.send(200);
  });
};

exports.removeTask = function(req, res, next) {
  var id = req.body._id;
  TaskModel.findByIdAndRemove(id, function (err) {
    if (err) return next(err);

    return res.send(200);
  });
};


exports.updateTask = function(req, res, next) {
  var task = req.data;
  TaskModel.update({_id: task._id}, task, function (err) {
    if (err) return next(err);
    
    return res.json(req.data);
  });

};

var task_data = [
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