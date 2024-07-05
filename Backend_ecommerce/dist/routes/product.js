import express from "express";
import { deleteProduct, getAdminProducts, getAllProducts, getCategory, getLatestProducts, getSearchProducts, getSingleProduct, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
import { adminOnly } from "../middlewares/auth.js";
const app = express();
// API's
app.post("/new", adminOnly, singleUpload, newProduct);
app.get("/latest", getLatestProducts);
app.get("/categories", getCategory);
app.get("/admin-products", adminOnly, getAdminProducts);
app.get("/search", getSearchProducts);
app.get("/all", getAllProducts);
// app.route("/all").get(getAllProducts).get(getSearchProducts)
app.route("/:id").get(getSingleProduct).put(adminOnly, singleUpload, updateProduct).delete(adminOnly, deleteProduct);
export default app;
