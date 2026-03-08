import e from "express";
import router from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import accountRoutes from "./routes/account.routes.js";

const app = e();

app.use(e.json())

app.use(cookieParser())

app.use("/api/auth", router)
app.use("/api/account", accountRoutes)

export default app;