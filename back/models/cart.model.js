const mongoose = require("mongoose");
const { Schema } = mongoose;


// const productOnChartSchema = new Schema({
//     item: { type: Schema.Types.ObjectId, ref: "product" },
//     quantity : Number
// },{_id:false})

const cartSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: "product" },
    quantity : Number
});


const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
