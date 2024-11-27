import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { userValidationRules } from "../middleware/validations/user.validation.js";
import { validate } from "../middleware/validate.middleware.js";
const router = Router();

router.post("/register", userValidationRules(), validate, register);
router.post("/login", userValidationRules(), validate, login);

export default router;
