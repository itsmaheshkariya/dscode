const { v4 } = require("uuid")
const MallProducts = require("../models/products.model")
const { GetUsers } = require("./users.controller")
module.exports.getProducts = (req,res)=>{
    res.json(MallProducts)
}
module.exports.postProduct = (req,res)=>{
    if(req.body == null){
        return res.send("Bad Request").status(400)
    }else{
    let newProduct = {
        ProductName : req.body.ProductName,
        ProductId : v4(),
        Category : req.body.Category
    }
    MallProducts.push(newProduct)
    res.json(MallProducts)
}
}

module.exports.putProduct = (req,res)=>{
    if(req.body == null){
        return res.send("Bad request").status(400)
    }else{
    MallProducts.forEach((item)=>{
        if(item.ProductId == req.params.id){
            item.ProductName = req.body.ProductName,
            item.Category = req.body.Category
        }
    })
     res.json(MallProducts)
}
}

module.exports.getProductsWithCategory = (req,res)=>{
    if(req.params.id != null){
            var filtered = MallProducts.filter((item)=>item.Category == req.params.Category)
            res.json(filtered)
        }
        else{
            res.send("Bad Request").status(400)
        }
}
module.exports.deleteProduct = (req,res)=>{
    if(req.params.id != null){

   MallProducts.forEach((item,index)=>{
       if(item.ProductId == req.params.id){
           MallProducts.splice(index,1)
       }
   })
    res.json(MallProducts)
}
else{
    res.send("Bad Request").status(400)
}
}
