'use strict';

var mongoose = require('mongoose'),
    Tasks = mongoose.model('Tasks'),
    passport = require('passport');

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

/**
* Quary all tasks
*
*/
exports.listTasks = function(req, res, next) {
  var con = {};
  var tasks = [];
	con.projectId = req.params.projectId;
	con.boardType = req.params.boardType;
	con.user = req.params.currentUser;
	console.log("listTasks............");
  console.log(req.params);
	// return res.json({tasks:task_data});
	Tasks.find(con, function(err, data) {
		if (err) return next(err);
    if (!data) return res.send(404);
    
    for (var item in data) {
      if (data[item].status == con.boardType && data[item].projectId == con.projectId) {
        tasks.push(data[item]);
      }
    }
    return res.json({tasks:tasks});
	});
};

exports.createTask = function(req, res, next) {
	var task = new Tasks(req.data);
  task.save(function(err) {
    if (err) return res.json(400, err);

    return res.send(200);
  });
};

exports.removeTask = function(req, res, next) {
  var id = req.data.id;
  Tasks.findIdAndRemove(id, function(err) {
    if (err) return next(err);

    return res.send(200);
  });
};


exports.updateTask = function(req, res, next) {
  var task = req.data;

};

var mongoose_example = {
  var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task_example');
//var db = mongoose.createConnection('localhost','task_example');
var Schema = mongoose.Schema;

// schema 
var TaskSchema = new Schema({
  title: String,
  id: String,
  info: String,
  checkList: {},
  members: [],
  creator: String,
  createTime: Date,
  label: String,
  dueDate: Date,
  workLoad: Number,
  projectId: String,
  projectName: String,
  status: String,
  delay: String
});

var TaskModel = mongoose.model('Task', TaskSchema);

// connect the DB

  // console.log(db);
  // insert into
// test object
// test object
var task_JSON = {
  "title": "task 7",
  "id": "task_7",
  "info": "Detail infomation",
  "checkList": { "list": "check list" },
  "members": ['user1','user2'],
  "creator": "Andy",
    "createTime": "2014/07/03",
  "label": "The classic of project",
  "dueDate": "2014/08/03",
  "workLoad": 8,
  "projectId": "pro_1",
  "projectName": "all",
  "status": "todo",
  "delay": ""
};
  var task_ex = new TaskModel(task_JSON);
  // task_ex.save(function(err) {
  //  if (err) {
  //    console.log("Insert int error.");
  //    console.log(err);
  //  } else {
  //    console.log("Insert into success.");
  //    // Query
    //   var query = TaskModel.find(function (err, data) {
    //     if (!err) {
    //       console.log("query result");
    //       console.log(data);
    //     } else {
    //       console.log("Error!");
    //       console.log(err);
    //     }
    //   });
    //   console.log("query");
   //   }
  // });

// Query
  // var con = "doing";
 //  var query = TaskModel.find(con, function (err, data) {
 //    if (!err) {
 //      for (var item in data) {
 //  //     console.log(item);
 //       if (data[item].status == con) {
 //         console.log(data[item]);
 //       }
 //      }
 //    } else {
 //      console.log("Error!");
 //      console.log(err);
 //    }
 //  });
 // // remove
 // var id = "53b61f61c07c19a4189b51a2";
 //  TaskModel.findByIdAndRemove(id, function(err) {
 //    if (err) {
 //     console.log("Error!");
 //      console.log(err);
 //    } else {
 //     TaskModel.find(con, function (err, data) {
  //      if (!err) {
  //        for (var item in data) {
  //    //      console.log(item);
  //          if (data[item]._id == id) {
  //            console.log("Remove failed!");
  //          }
  //        }
  //      } else {
  //        console.log("Error!");
  //        console.log(err);
  //      }
  //    });
 //    }

 //   console.log("Run remove function!");
 //  });

  // update
  var id = "53b6232c044f20440bed9078";
  TaskModel.update({_id: id}, task_JSON, function(err, numberAffected, raw) {
    if (err) return handleError(err);
    console.log('The number of updated documents was %d', numberAffected);
    console.log('The raw response from Mongo was ', raw);
    TaskModel.find(id, function (err, data) {
        if (!err) {
          for (var item in data) {
      //      console.log(item);
            if (data[item]._id == id) {
              console.log(data[item]);
            }
          }
        } else {
          console.log("Error!");
          console.log(err);
        }
      });
  });
  console.log("Run update function!");
};
