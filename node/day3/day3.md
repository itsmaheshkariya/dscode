# Day 3: Basic DS (Mahesh & Munna)

`let, var and const declarations and usage.`

var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.

`let implemented`
```js
/**
 * Here we can not access var outside the function. 
*/
let greeter = "hey hi";   
if (true) {  
   let greeter = "Say Hello";   
}  
console.log(greeter)
// hey hi
```
`var implemented`
```js
/**
 * Here we can access var outside the function.
*/
var greeter = "hey hi";   
if (true) {  
   var greeter = "Say Hello";   
}  
console.log(greeter)
// Say Hello 
```

`Destructuring in ES5`
```js
const person = {
    name:"munna",
    email:"munna@gmail.com",
    password:"munna@123",   
}
let name = person.name;
let email = person.email;
let password = person.password;
console.log(name,email,password)
// munna munna@gnail.com munna@123
```
`Destructuring in ES6`
```js
const person = {
    name:"munna",
    email:"munna@gmail.com",
    password:"munna@123",
    
}
let { name, email, password} = person; 
console.log(name,email,password)
// munna munna@gmail.com munna@123
```

`Arrow Functions declarations and usage.`

`ES5 Function`
```js
function es5Fun(){
    console.log("Need to write function")
}
es5Fun();
// Need to write function
```
`ES6 Function`
```js
es6Fun()=>console.log("No need to write function")
// No need to write function
```

`Extended Parameter Handling`

`ES5`
```js
function add(a,b){
    let num1 = a || 10;
    let num2 = b || 20;
    console.log(num1 + num2);
}
add();
add(1,1)
// 30
// 2
```
`ES6`
```js
let add = (a=10,b=20)=>console.log(a+b)
add();
add(1,1);
// 30
// 2
```

`Spread Operator`

`Without Spread operator`
```js
let arr1 = [1,2,3]
let arr2 = [4,5,6]
console.log(arr1.concat(arr2))
// [1,2,3,4,5,6]
```
`With Spread operator`
```js
let arr1 = [1,2,3]
let arr2 = [4,5,6]
console.log([...arr1,...arr2])
// [1,2,3,4,5,6]
```

`Template Literals`

`Without Template Literals`

```js
let message = 'First line\nSecond line'
console.log(message)
// First line
// Second line
```
`With Template Literals`

```js
let message = 
`
First line
Second line
`
console.log(message)
// First line
// Second line
```

`Shorthand Property of Object`

`ES5`
```js
const name = "mahesh"
const email = "mahesh@gmail.com"
const password = "mahesh@123"

person.name = name;
person.email = email;
person.password = password;
console.log(person)
//{ name:"mahesh", email:"mahesh@gmail.com", password:"mahesh@123" }
```
`ES6`
```js
const name = "mahesh"
const email = "mahesh@gmail.com"
const password = "mahesh@123"

const person = {name, email, password}
console.log(person)
//{ name:"mahesh", email:"mahesh@gmail.com", password:"mahesh@123" }
```

`Destructuring Assignment of object`
```js
let arr = ["mahesh","mahesh@gmail.com"];
let [name,email] = arr
console.log(name,email)
// mahesh mahesh@gmail.com

```


