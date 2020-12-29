const express = require('express')
const bodyParser = require("body-parser")
const app = express();

// const mongoose = require('mongoose')
// var db = mongoose.connect("mongodb+srv://munnas:0000@cluster0.8ugu3.mongodb.net/munnas?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true })

// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

app.use("/",require('./routes/users'))

app.listen(8080)

// mongodb URL: mongodb+srv://munnas:0000@cluster0.8ugu3.mongodb.net/munnas?retryWrites=true&w=majority

// http://729cc1937cd6.ngrok.io

// var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000)



// src
// │   app.js          # App entry point
// └───api             # Express route controllers for all the endpoints of the app
// └───config          # Environment variables and configuration related stuff
// └───jobs            # Jobs definitions for agenda.js
// └───loaders         # Split the startup process into modules
// └───models          # Database models
// └───services        # All the business logic is here
// └───subscribers     # Event handlers for async task
// └───types           # Type declaration files (d.ts) for Typescript











































// const express = require("express")
// const bodyParser = require("body-parser")

// const app = express();





// // Middle Ware
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())



// var users = [];

// // GET Method
// app.get("/",(req,res)=>{
//     res.send(users);
// })

// // POST Method
// app.post("/signup",(req,res)=>{
//     let obj = {}
//     obj.name = req.body.name
//     obj.email = req.body.email
//     users.push(obj)
//     res.json(users)
// })

// // PUT Method

// app.put('/update/:name', (req,res) => {
//     users.forEach((item)=>{
//             if(item.name == "sudeep"){
//                 item.name  = req.body.name
//                 item.email  = req.body.email
//             }
//     })
//     res.json(users)
// })

// // app.delete("/delete/:name",(req,res)=>{
// //     users.forEach((item,index)=>{
// //         if(item.name == req.params.name){
// //             users.splice(index,1)
// //         }
// //     })
// //     res.json(users)
// // })

// app.delete("/delete/:name",(req,res)=>{
//     users.forEach((item,index)=>{
//         if(item.name == req.params.name){
//             delete 
//         }
//     })
//     res.json(users)
// })
// app.listen(8080)


// // http://729cc1937cd6.ngrok.io



// // REST Ful API
// // CRUD Operation