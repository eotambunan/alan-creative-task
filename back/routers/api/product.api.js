const express = require('express')
const productApi = express.Router()
const productController = require('../../controllers/product.controller')
const product = new productController

// multer
const upload = require("../../middlewares/multer")


productApi.get("/product",product.getAll)
productApi.post("/product",product.add)
productApi.post("/product/img",upload.single('image'),product.addImage)
productApi.delete("/product/:id",product.delete)




module.exports = productApi