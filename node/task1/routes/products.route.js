const express = require("express")
const router = express.Router()

const { GetProducts, PostProduct, GetProductsWithCategory } = require("../controllers/products")
/**
 * Get All Products List
 */
router.get("/",GetProducts)
/**
 * Post Product with Product Name , Product type and product Id.
 */
router.post("/",PostProduct)

/**
 * Get Products By Category
 */
router.get("/:Category",GetProductsWithCategory)

module.exports = router