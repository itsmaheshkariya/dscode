# Day 2: Basic DS (Mahesh & Munna)
## What is an object?

<sup> JavaScript objects are containers for named values called properties or methods. </sup>

<sup> Suppose "Car" is an object and it has "proerties" like 'color' and 'weight 'and "methods" such as 'start' and 'stop'.</sup>

<sup> Objects are also called as variables, but object can store multiple values. </sup>

`Initialization`
```js
var obj = {}
```
`Assigning values to the object properties`
```js
obj.name = "Mahesh"
```
`Assigning functions to the object methods`
```js
obj.myFun = ()=>{
    return obj.name;
}
```
`Accessing properties of the object`
```js
obj.name
obj["name"]
obj[0]
```
`Accessing methods of the object`
```js
obj.myFun()
```
`Update object properties`
```js
obj.name="update_here"
```
`Delete Properties | Delete object keys`
```js
var person = {lastName:"Doe", age:50 };
delete person.age;
```
`Built in Objects`
```js
obj.name.toUpperCase();
```
`Object.keys`
```js
console.log(Object.keys(obj));
// [ 'name' ]
```
`Object.values`
```js
console.log(Object.values(obj));
// [ 'Mahesh' ]
```
`Object.hasOwnProperty()`
```js
var obj = {}
obj.email = "info@mail.com"
console.log(obj.hasOwnProperty("email"))
console.log(obj.hasOwnProperty("name"))
// true
// false
```
`Object.assign(obj1,obj2)`
```js
var obj1 = {a:'m'}
var obj2 = {}
Object.assign(obj2,obj1);
console.log(obj2)
// { a: 'm' }
```
`Nested objects and accessing nested object properties`
```js
var obj = {
    id:1,
    name:'mahesh',
    address:{
        pin:441904,
        city:'bhandara'
    }
}
console.log(obj.address.pin)
```