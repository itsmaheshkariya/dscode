// var arr = ["mahesh","munna","mahesh"]
// console.log(arr1)

// arr.map((item)=>{
//     console.log(item)
// })
// console.log(arr.reduce((total,item)=>{
//     return total+item
// }))

// var obj = {
//     id:"1",
//     name:"mahesh",
//     address:{
//         pin:441904,
//         city:"bhandara",
//         district:"bhandara"
//     }
// }

// console.log(Object.keys(obj.address)[2])

// console.log(Object.keys(Object.values(obj)[2])[2])
// console.log(Object.keys(obj.address)[0])








// var arr = ["mahesh","dipak","kariya","munna"]
// arr.splice(0,2);
// console.log(arr);

// arr.slice(0,2);
// console.log(arr);







// arr.unshift("ok")
// arr.shift()

// console.log(arr)
// console.log(arr.slice(0,2));


// let myFun =(arr) => {
//     arr.splice(2,3); // [1,2,6,7,8]
//     let arr1 = arr.slice(2,3);
//     return arr1;
//    }
// let arr = [1,2,3,4,5,6,7,8];
// console.log(...myFun(arr),...arr);

// let myFun =(arr) => {
//     arr.splice(2,3); // [1,2,6,7,8] , [3,4,5]
//     let arr1 = arr.slice(2,3);
//     return arr1;
//    }
// let arr = [1,2,3,4,5,6,7,8];
// console.log(...myFun(arr),...arr); //6 1 2 6 7 8


// // let myObj = {
//   "name":"John",
//   "age":30,
//   "cars": [
//     { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
//     { "name":"BMW", "models":[ "320", "X3", "X5" ] },
//     { "name":"Fiat", "models":[ "500", "Panda" ] }
//   ]
//  }
 
//  console.log(myObj.cars[0].models)



var arr = [1,2,3].splice(1,2)
var arr1 = [1,2,3].slice(1,2)
console.log(arr1)