const express = require('express');
const {v4} = require("uuid")
const router = express.Router();
var users = []

router.get("/",(req,res) => {
    res.json(users);
})

router.post("/signup",(req,res) => {
    let obj = {}
    obj.id = v4()
    obj.name = req.body.name;
    obj.email = req.body.email;
    obj.contact = req.body.contact
    users.push(obj)
    res.json(users);
})

router.put("/update/:id",(req,res) => {
    users.forEach((item) => {
        if(item.id === req.params.id){
            item.name = req.body.name;
            item.email = req.body.email;
            item.contact = req.body.contact;
        }
    })
    res.json(users);
})

router.delete("/delete/:id",(req,res) => {
    users.forEach((item,index) => {
        if(item.id === req.params.id){
            users.splice(index,1);
        }
    })
    res.json(users);
})
module.exports = router