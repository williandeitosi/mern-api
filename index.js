const TodoItemRouter = require("./routes/todoItems");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3333;


mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));





const allowedOrigins = ["https://mern-frontend-ivory.vercel.app"]

app.use(cors({
  origin: function(origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true)
    }
    else {
      callback(new Error(origin + ' não é habilitado pelo CORS'))
    }
  },
  credentials: true,
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use("/", TodoItemRouter);

app.listen(PORT, () => console.log(`Server running on port http://${PORT}`));


