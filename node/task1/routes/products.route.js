const express = require("express")
const router = express.Router()

const { GetProducts, PostProduct } = require("../controllers/products")
/**
 * Get All Products List
 */
router.get("/",GetProducts)
/**
 * Post Product with Product Name , Product type and product Id.
 */
router.post("/",PostProduct)

module.exports = router