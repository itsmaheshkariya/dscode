const express = require('express');
const app = express();

// https://github.com/itsmaheshkariya/dscode/tree/master/node/day8


const bodyParser = require("body-parser")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",require("./users/user1"))




app.listen(8080);


// https://www.youtube.com/channel/UCDR79YG43mX3I8_75kyd3Kw

// localhot:8080

// // localhost:8080/123/mahesh
// app.get("/:id/:name/",(req,res)=>{
//     res.send(req.params.id)
// })

// // localhost:8080?name=mahesh&email=mahesh@gmail.com
// app.get("/",(req,res)=>{
//     res.send(req.query.email)
// })



