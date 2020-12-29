const express = require('express');
const {v4} = require("uuid")


const router = express.Router();

// http://bc42c8c93716.ngrok.io

var users = []
//http://bc42c8c93716.ngrok.io/ 

router.get("/",(req,res)=>{
    res.send(users);
})

//http://bc42c8c93716.ngrok.io/signup method- post 

router.post("/signup",(req,res)=>{
    
    users.push(req.body)
    res.json(users)
})
//http://bc42c8c93716.ngrok.io/update/mahesh method- put 
router.put("/update/:name",(req,res)=>{
    
    users.forEach((item)=>{
        if(item.name == req.params.name){
            item.name = req.body.name
            item.email = req.body.email
            item.contact = req.body.contact
        }
    })

    res.json(users)
})

//http://bc42c8c93716.ngrok.io/delete/nikhil  method- delete 
router.delete("/delete/:name",(req,res)=>{
    users.forEach((item,index)=>{
        if(item.name == req.params.name)
        {
            users.splice(index,1)
        }
    })
    res.json(users)
})


module.exports = router;


