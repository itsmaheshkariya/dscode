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

module.exports = {GetUsers,PostUser}