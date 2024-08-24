import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes.js";

const PORT = 8000;

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);
app.get("/", (req, res) => {
  return res.json("server is running");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
