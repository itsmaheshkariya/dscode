// let greeter = "hey hi";   
// if (true) {  
//    let greeter = "Say Hello JavaTpoint";   
// }  
// console.log(greeter)


/**
 * // we can use/access var in function as well as outside of the function.
 * 
 */
// let i = 1;
// for(let i = 0; i<=3; i++){
//     console.log(i + " inside");
// }
// console.log(i + " outside");

// let greeter = "hey hi";   
// if (true) {  
//    let greeter = "Say Hello";
// //    console.log(greeter)   
// }  
// console.log(greeter)



// const person = {
//     name:"munna",
//     email:"munnashare828@gmail.com",
//     password:"indianman111",
    
// }
// let name = person.name;
// let email = person.email;
// let password = person.password;
// console.log(name,email,password)

// let { name, email, password} = person;
// console.log(name,email,password)



// function add(a,b){
//     let num1 = a || 10;
//     let num2 = b || 20;
//     return num1 + num2;
// }
// console.log(add());
// console.log(add(1,1))

// let add=(a=10,b=20)=>a+b
// console.log(add());
// console.log(add(1,1));

// let message1 = 'First line\nSecond line'
// let message2 = 
// `
// First line
// Second line
// `
// console.log(message1)
// console.log(message2)

let arr = ["mahesh","mahesh@gmail.com"];
let [name,email] = arr
console.log(name,email)