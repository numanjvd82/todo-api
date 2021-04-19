const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  createTodos,
  getSpecificTodo,
} = require('../controllers/todos');

router.get('/all', getAllTodos);
router.post('/create', createTodos);
router.get('/:id', getSpecificTodo);

module.exports = router;
