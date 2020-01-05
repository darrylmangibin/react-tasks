const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Task = mongoose.model('task', tasksSchema);

module.exports = Task;