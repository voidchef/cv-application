import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL!);
const database = mongoose.connection;

database.on("error", (error: Error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app: Express = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes);

const port = parseInt(process.env.PORT as string) | 3001;
app.listen(port, () => {
  console.log(`[server]: Server is running at ${port}`);
});
