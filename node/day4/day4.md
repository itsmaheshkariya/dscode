# Day 4: Basic DS (Mahesh & Munna)

`JSON structure`
```js
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
```

`Add/Delete/Update JSON properties`
```js
obj[0]["city"] = "pune"
obj[0].email = "update@gmail.com"
delete obj[0]["name"]
```

`Arrays as JSON`
In JSON, array values must be of type string, number, object, array, boolean or null.
```js
myObj {
    name:"munna",
    address:[
        {
            city:"gondia",
            town:"arjuni/mor"
        },
        {
            city:"bhandara",
            town:"bhandara"
        }
    ]
}
console.log(myObj.address[0])
//{ city:"gondia", town:"arjuni/mor" }
```

`JSON.parse()`
Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
```js
var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
console.log(obj)
```

`JSON.stringify()`
The JSON.stringify() method converts a JavaScript object or value to a JSON string,
```js
console.log(JSON.stringify({ x: 5, y: 6 }));
```



<!-- POL: Day 4 Basic DS (12/25/2020) -->
