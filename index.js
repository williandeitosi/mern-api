const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3333;

app.use(cors());

const TodoItemRouter = require("./routes/todoItems");

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port http://${PORT}`));

app.use("/", TodoItemRouter);
