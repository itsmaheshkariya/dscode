const MallUsers = require("../models/users.model")
module.exports.getUsers = (req,res)=>{
    res.json(MallUsers)
}
module.exports.postUser = (req,res)=>{
    if(req.body == null){
        return res.send("Bad Request").status(400)
    }else{
        let newUser = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address,
            pin:req.body.pin
        }
        MallUsers.push(newUser)
        res.json(MallUsers)
    }
}

module.exports.putUser = (req,res)=>{
    if(req.body == null){
        return res.send("Bad Request").status(400)
    }else{
    MallUsers.forEach((item)=>{
        if(item.id == req.params.id){
            item.name=req.body.name,
            item.email=req.body.email,
            item.password=req.body.password,
            item.address=req.body.address,
            item.pin=req.body.pin
        }
    })
}
    res.json(MallUsers)
}

module.exports.getUser = (req,res)=>{
    if(req.params.id != null){
    res.json(MallUsers.find((item)=>item.id == req.params.id))}
    else{
        res.send("Bad Request").status(400)
    }
}


module.exports.deleteUser = (req,res)=>{
    if(req.params.id != null){
    MallUsers.forEach((item,index)=>{
        if(item.id == req.params.id){
            MallUsers.splice(index,1)
        }
    })
    res.json(MallUsers)
    }
    else{
        res.send("Bad Request").status(400)
    }
}
