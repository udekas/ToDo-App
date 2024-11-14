import { Router } from "express";
import { createToDo, getAllTodos, getTodo, deleteTodo, updateTodo } from "../controllers/todo.controller.js";

const router = Router()

// Get /todos => getAllTodos
// GET /todos/4 => getTodo 
// POST /todos => createTodo 
// PUT /todos/4 => updateTodo
// DELETE /todos/4 => deleteTodo

router.post('/todos/', createToDo)
router.get('/todos', getAllTodos)
router.get('/todos/:id', getTodo)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

export default router