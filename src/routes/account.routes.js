import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createAccountController } from "../controllers/account.controller.js";

const accountRoutes = Router()

/**
 * - POST /api/accounts
 * - Create a new account
 * - Protected Route
 */

accountRoutes.post("/", authMiddleware, createAccountController)

export default accountRoutes