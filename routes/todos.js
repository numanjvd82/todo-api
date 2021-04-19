const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  createTodos,
  getSpecificTodo,
  updateTodo,
} = require('../controllers/todos');

router.get('/all', getAllTodos);
router.post('/create', createTodos);
router.get('/:id', getSpecificTodo);
router.patch('/:id', updateTodo);

module.exports = router;
