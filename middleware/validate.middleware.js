import { request, response } from "express";
import { todoValidatorRules } from "./validations/todo.validation.js";
import { validationResult } from "express-validator";

export const validate = (request, response, next) => {
  todoValidatorRules(request);

  const result = validationResult(request);

  if (result?.errors.length) {
    return response.status(400).json({
      message: "validation errors",
      errors: result.errors,
    });
  }
  next();
};
