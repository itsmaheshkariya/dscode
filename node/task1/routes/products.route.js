const express = require("express")
const router = express.Router()

const controller = require("../controllers/products.controller")
/**
 * Get All Products List
 */
router.get("/",controller.getProducts)
/**
 * Post Product with Product Name , Product type and product Id.
 */
router.post("/",controller.postProduct)


router.put("/:id",controller.putProduct)


router.delete("/:id",controller.deleteProduct)

/**
 * Get Products By Category
 */
router.get("/:Category",controller.getProductsWithCategory)

module.exports = router