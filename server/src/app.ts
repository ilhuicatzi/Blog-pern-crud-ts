import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.get("/", (_req, res) => {
  res.json({ message: "Welcome to my API with Nodejs and TypeScript!" });
});

export default app;
