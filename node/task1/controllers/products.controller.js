const { v4 } = require("uuid")
const MallProducts = require("../models/products.model")
const { GetUsers } = require("./users.controller")
let GetProducts = (req,res)=>{
    res.json(MallProducts)
}
let PostProduct = (req,res)=>{
    let newProduct = {
        ProductName : req.body.ProductName,
        ProductId : v4(),
        Category : req.body.Category
    }
    MallProducts.push(newProduct)
    res.json(MallProducts)
}

let GetProductsWithCategory = (req,res)=>{
    var filtered = MallProducts.filter((item)=>item.Category == req.params.Category)
    res.json(filtered)
}

module.exports = {GetProducts,PostProduct,GetProductsWithCategory}