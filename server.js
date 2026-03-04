import "dotenv/config";
import app from "./src/app.js";
import { connectDb } from "./src/config/db.js";

connectDb();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});