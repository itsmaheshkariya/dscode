const express = require("express");
const router = exppress.Router();

router.get("/",(req,res)=>{
    res.send("Hello world");
})


module.exports = router