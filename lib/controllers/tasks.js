'use strict';

var mongoose = require('mongoose'),
  //  Tasks = mongoose.model('Tasks'),
    passport = require('passport');

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

/**
* Quary all tasks
*
*/
exports.listTasks = function(req, res) {
	// var projectId = req.params.projectId;
	// var boardType = req.params.boardType;
	// var user = req.params.currentUser;
	console.log("listTasks............");
	return res.json({tasks:task_data});
	// Tasks.queryTasks(projectId, boardType, user,
	// 	function(err, data) {
	// 		if (err) return next(err);
  //    if (!data) return res.send(404);
  //     res.json(data);
	// 	});
};

exports.createTask = function(req, res, next) {
	var task = req.data;
	return res.send(200);
	// Task.insertTask(task, function(err) {
	// 	if (err) return res.json(400, err);
		
	// 	return res.send(200);
	// });
};

