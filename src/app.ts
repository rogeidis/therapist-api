import express from "express";
import authRoutes from "./routes/auth";
import routes from "./routes";
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/",authRoutes)
app.use("/session", routes);

export default app;
