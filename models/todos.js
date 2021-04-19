const mongoose = require('mongoose');
const formatDate = require('../utils/date');

const Schema = mongoose.Schema;

// ! create a todos schema & model

const TodosSchema = new Schema({
  todo: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Todos = mongoose.model('todos', TodosSchema);

module.exports = Todos;
