const TodosSchema = require('../models/todos');

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodosSchema.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const createTodos = async (req, res) => {
  const todo = req.body;
  const newTodo = new TodosSchema(todo);
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const getSpecificTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await TodosSchema.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const updateTodo = async (req, res) => {
  const updatedTodo = req.body;
  const { id } = req.params;
  try {
    const todo = await TodosSchema.findByIdAndUpdate(id, updatedTodo);
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports = { getAllTodos, createTodos, getSpecificTodo, updateTodo };
