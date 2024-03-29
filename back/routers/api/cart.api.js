const express = require('express')
const cartRouter = express.Router()
const cartController = require('../../controllers/cart.controller')
const cart = new cartController

cartRouter.get("/cart",cart.getCart)
cartRouter.post("/cart",cart.addCart)
cartRouter.delete("/cart",cart.deleteCart)

module.exports = cartRouter