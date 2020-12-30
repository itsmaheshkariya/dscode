const express = require("express")
const router = express.Router()

const {GetUsers,PostUser,GetUser} = require("../controllers/users")

/**
 * Get All Users List
 */
router.get("/",GetUsers)

/**
 * Post User with name,email,password,address and pin code.
 */
router.post("/",PostUser)

/**
 * Get Specific USer By its Id
 */

router.get("/:id",GetUser)

module.exports = router