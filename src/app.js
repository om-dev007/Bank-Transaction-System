import e from "express";
import router from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = e();

app.use(e.json())

app.use(cookieParser())

app.use("/api/auth", router)

export default app;