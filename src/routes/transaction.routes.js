import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";

const transactionRoutes = Router();

/**
 * - POST /api/transactions/
 * - Create a new transaction
 */

transactionRoutes.post("/", authMiddleware)


export default transactionRoutes