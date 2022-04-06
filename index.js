// "use strict";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./src/db/mongo.js";
import router from "./src/routes/book.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", cors(), (req, res) => {
  res.send("welcome to our crud api tutorial:)");
});

app.use(
  cors({
    origin: "*",
    methods: "GET, PUT, HEAD, DELETE, PATCH, POST",
  })
);

app.use(express.json());
// routes (you can add as many routes as you have in your project)
app.use("/api/v1/books", router);

// mongodb
connect();

app.listen(port, () => {
  console.log(`Our API is running on PORT: ${port}`);
});

export default app;
