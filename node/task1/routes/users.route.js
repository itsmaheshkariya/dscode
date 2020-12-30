const express = require("express")
const router = express.Router()

const controller = require("../controllers/users.controller")

/**
 * Get All Users List
 */
router.get("/",controller.getUsers)

/**
 * Post User with name,email,password,address and pin code.
 */
router.post("/",controller.postUser)

router.put("/",controller.putUser)

router.delete("/:id",controller.deleteUser)


/**
 * Get Specific USer By its Id
 */

router.get("/:id",controller.getUser)

module.exports = router