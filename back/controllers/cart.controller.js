const cartModel = require("../models/cart.model");

class Cart {
    async getCart(req, res) {
        try {
            const data = await cartModel.find().populate("productId");
            res.status(200).json({
                message: "success",
                data,
            });
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
    }

    async addCart(req, res) {
        try {
            const payload = req.body;
            const existingCart = await cartModel.find();
            if (existingCart.length === 0) {
                existingCart.push(payload);
                console.log(existingCart);
                await cartModel.create(existingCart);
                res.status(200).json({
                    message: "Item added",
                });
            } else if (existingCart) {
                const existingItem = existingCart.find((item) => {
                    return item.productId.toString() === payload.productId;
                });
                if (existingItem) {
                    existingItem.quantity += 1;
                } else if (!existingItem) {
                    existingCart.push(payload);
                }
                await cartModel.create(existingCart);
                res.status(200).json({
                    message: existingItem ? "Quantity added" : "Item added",
                });
            }
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
    }

    async deleteCart(req, res) {
        try {
            const data = await cartModel.deleteMany({})
            res.status(200).json({
                message: "success",
                data,
            });
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
    }
}

module.exports = Cart;
