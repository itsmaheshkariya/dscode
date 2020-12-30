const MallUsers = require("../modules/users")
let GetUsers = (req,res)=>{
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
let PostUser = (req,res)=>{
    res.json(MallUsers)
}
let GetUser = (req,res)=>{
    res.json(MallUsers.find((item)=>item.id == req.params.id))
}

module.exports = {GetUsers,PostUser,GetUser}