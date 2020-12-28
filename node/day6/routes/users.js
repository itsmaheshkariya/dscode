const express = require("express")
const router = express.Router();
const {v4} = require("uuid")

var users = []
router.get("/users",(req,res)=>{
    res.json(users)
})

router.post("/registration",(req,res)=>{
    var obj = {
        id:v4(),
        name:req.body.name,
        email:req.body.email
    }
   users.push(obj);
   res.json(users);
})

router.put("/update/:id",(req,res)=>{
    users.forEach((item)=>{
        if(item.id == req.params.id){
            item.name = req.body.name
            item.email = req.body.email
        }
   })
   res.json(users)

})

router.delete('/delete/:id', (req, res) => {
    users.forEach((item,index) => {
        if(item.id === req.params.id){
            users.splice(index,1);
        }
    })
    res.json(users);
})

module.exports = router