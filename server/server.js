import express from "express";
import exampleRoute from "./routes/exampleRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello  ");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
