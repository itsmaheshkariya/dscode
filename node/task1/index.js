const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 8080 || process.env.PORT

/**
 * Middleware of bodyparser
 */
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use("/MallUsers",require("./routes/users.route"))
app.use("/MallProducts",require("./routes/products.route"))




app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Port running on "+port )
    }
})