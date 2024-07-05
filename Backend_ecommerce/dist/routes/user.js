import express from "express";
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";
const app = express();
//routes
app.post("/new", newUser); //      /api/v1/user/new
app.get("/all", adminOnly, getAllUsers); //      /api/v1/user/all\
// It works for both get single user as well as delete User. Its called Route Chaining
app.route("/:id").get(getUser).delete(adminOnly, deleteUser);
export default app;
