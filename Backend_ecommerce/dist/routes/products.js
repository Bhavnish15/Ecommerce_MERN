import express from "express";
import { newProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const app = express();
// API's
app.post("/new", singleUpload, newProduct);
export default app;
