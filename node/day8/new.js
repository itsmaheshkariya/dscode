const express = require('express');
const app = express();

// // localhost:8080/123/mahesh
// app.get("/:id/:name/",(req,res)=>{
//     res.send(req.params.id)
// })

// // localhost:8080?name=mahesh&email=mahesh@gmail.com
// app.get("/",(req,res)=>{
//     res.send(req.query.email)
// })




app.listen(process.env.PORT);



// localhot:8080




// const bodyParser = require("body-parser")

// // https://www.youtube.com/channel/UCDR79YG43mX3I8_75kyd3Kw

// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: true}));

// // app.use("/",require("./users/user1"))
