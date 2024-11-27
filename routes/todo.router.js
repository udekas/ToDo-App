import { Router } from "express";
import {
  createToDo,
  getAllTodos,
  getTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todo.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { todoValidatorRules } from "../middleware/validations/todo.validation.js";
import { validate } from "../middleware/validate.middleware.js";

const router = Router();
router.use(authenticateToken);

// Get /todos => getAllTodos
// GET /todos/4 => getTodo
// POST /todos => createTodo
// PUT /todos/4 => updateTodo
// DELETE /todos/4 => deleteTodo

router.post("/todos/", todoValidatorRules(), validate, createToDo);
router.get("/todos", getAllTodos);
router.get("/todos/:id", getTodo);
router.put("/todos/:id", todoValidatorRules(), validate, updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
