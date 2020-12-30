const { v4 } = require("uuid")
const MallProducts = require("../modules/products")
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

module.exports = {GetProducts,PostProduct}