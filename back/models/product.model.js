const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: String,
    price: Number,
    image: String,
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
