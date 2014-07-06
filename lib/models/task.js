'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Task Schema
 */
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

mongoose.model('Tasks', TaskSchema);