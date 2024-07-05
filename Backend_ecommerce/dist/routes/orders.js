import express from "express";
import { newOrder } from "../controllers/orders.js";
const app = express.Router();
// Routes
app.post('/new', newOrder);
export default app;
