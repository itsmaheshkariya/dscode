let obj = [
    {
    id:1,
    name:"mahesh",
    email:"mahesh@gmail.com",
    },
    {
        id:2,
        name:"munna",
        email:"munna@gmail.com"
    }
]

obj[0]["city"] = "pune"
obj[0].email = "update@gmail.com"
delete obj[0]["name"]


console.log(obj)