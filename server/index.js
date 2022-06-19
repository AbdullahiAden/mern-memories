const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", require("./routes/postRoutes"));
app.use(errorHandler);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`listening on port ${port}`));
