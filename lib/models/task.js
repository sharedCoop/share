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
  members: {},
  creator: String,
  createTime: Date,
  label: String,
  dueDate: Date,
  workLoad: String,
  projectId: String,
  projectName: String,
  status: String
});

// Basic info to identify the current authenticated user in the app
// UserSchema
//   .virtual('userInfo')
//   .get(function() {
//     return {
//       'name': this.name,
//       'role': this.role,
//       'provider': this.provider
//     };
//   });

/**
 * Methods
 */
// TaskSchema.methods = {
//   *
//    * queryTasks - Query the task list
//    *
//    * @param {String} plainText
//    * @return {Boolean}
//    * @api public
   
//   queryTasks: function(plainText) {
//     return this.encryptPassword(plainText) === this.hashedPassword;
//   },