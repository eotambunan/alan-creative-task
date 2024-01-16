const productModel = require("../models/product.model");
// multer
const upload = require("../middlewares/multer")


class Product {
    async getAll(req, res) {
        try {
            const data = await productModel.find();
            res.status(200).json({
                message: "success",
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    }
    async add(req, res) {
        try {
            const payload = req.body;
            console.log(payload)
            const data = await productModel.create(payload);
            res.status(200).json({
                message: "success",
                data,
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    }
    async addImage(req,res){
        try {
            const fileName = req.file.filename
            res.status(200).json({
                message : fileName
            })            
        } catch (error) {
            res.status(400).json({
                error : error.message
            })
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await productModel.findByIdAndDelete(id);
            res.status(200).json({
                message: "success",
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    }
}

module.exports = Product;
