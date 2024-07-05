import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Name"],
    },
    photo: {
        type: String,
        required: [true, "Please upload photo"],
    },
    price: {
        type: String,
        required: [true, "Please enter price"],
    },
    stock: {
        type: Number,
        required: [true, "Please enter number of products"],
    },
    category: {
        type: String,
        required: [true, "Please enter category of the product"],
        trim: true,
    },
}, {
    timestamps: true,
});
export const Product = mongoose.model("Product", productSchema);
