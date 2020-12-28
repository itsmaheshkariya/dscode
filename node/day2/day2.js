// var car = {
//     type:"Flat",
//     model:"123",
//     color:"red",
//     any:()=>{
//         return this.type
//     }
// }
// console.log(car.any())


// var obj = {}
// obj.name = "Mahesh"
// obj.myFun = ()=>{
//     return obj.name;
// }

// for (x in obj){
//     console.log(x)
// }
// console.log(obj.myFun())
// console.log(Object.keys(obj));


// const object1 = {};
// object1.property1 = 42;

// console.log(object1.hasOwnProperty('property1'));
// // expected output: true

// console.log(object1.hasOwnProperty('toString'));
// // expected output: false

// var obj1 = {a:'m'}
// var obj2 = {}
// Object.assign(obj2,obj1);
// console.log(obj2)

// var obj = [{
//     id: 1,
//     name: 'mahesh',
//     address: {
//         pin: 441904,
//         city: 'bhandara'
//     }
// }, {
//     id: 2,
//     name: 'munna',
//     address: {
//         pin: 441701,
//         city: 'arjuni'
//     }
// }]

// console.log(obj[0].address.pin)


// class User{
//     User(){
//         let name = "Mahesh";
//         let email = "email"
//     }
//     getFullName(this){
//         return this.name
//     }
// }
// let go = new User()

// console.log(go.name)
// var obj = {
//   a: {
//      b: {
// c: {
//          name: "Tudip",
//          position: ["QA"]
//       }
//    }
// }
// }

// console.log(obj.a.b.c.position[0])
// console.log(Object.keys((obj.a.b.c))[1])