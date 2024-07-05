import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-classes.js";
import { TryCatch } from "./error.js";
// middleware to make sure only admin is allowed
export const adminOnly = TryCatch(async (req, res, next) => {
    const { id } = req.query;
    if (!id)
        return next(new ErrorHandler("You must login first", 401));
    const user = await User.findById(id);
    if (!user)
        return next(new ErrorHandler("Enter a correct id", 401));
    if (user.role != "admin")
        return next(new ErrorHandler("Sorry you can't access this URL", 401));
    next();
});
