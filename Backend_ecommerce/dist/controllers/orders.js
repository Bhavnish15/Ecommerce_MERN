import { TryCatch } from "../middlewares/error.js";
import { Order } from "../models/orders.js";
import { invalidatesCache, reduceStock } from "../utils/features.js";
import ErrorHandler from "../utils/utility-classes.js";
export const newOrder = TryCatch(async (req, res, next) => {
    const { shippingInfo, orderItems, user, subtotal, tax, shippingCharges, discount, total } = req.body;
    if (!shippingInfo || !orderItems || !user || !subtotal || !tax || !shippingCharges || !discount || !total) {
        return next(new ErrorHandler("Please Enter All Fields", 400));
    }
    await Order.create({ shippingInfo, orderItems, user, subtotal, tax, shippingCharges, discount, total });
    await reduceStock(orderItems);
    await invalidatesCache({ product: true, order: true, admin: true });
    res.status(200).json({
        success: true,
        message: "Order Placed Successfully",
    });
});
