const express = require("express")
const bodyParser = require("body-parser")

const app = express();

//Middle 
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


// Middleware
app.use("/",require("./controllers/practice"))
//


// http://a00fcd2749d2.ngrok.io/?name=mahesh&email=mahesh@gmail.com

// https://www.postman.com/downloads/

app.listen(8080)