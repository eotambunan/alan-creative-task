const express = require('express')
const route = express.Router()
const product = require('./api/product.api.js')
const cart = require('./api/cart.api.js')


route.use("/v1",product)
route.use("/v1",cart)


module.exports = route
