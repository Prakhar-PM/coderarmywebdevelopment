// this keyword in javascript is a special keyword that refers to
// the context in which the current code is being executed
// its value depends on how the function where this is used is called 
// this keh rha hai ki ye hmesha change hota rehta hai




// 1. Global context (outside any function)
// in browser: window
// in node js : module's export object

// inside a function

// 2. inside a function
//i : non strict mode 
// when this is used inside a regular function , it refers to global object
//i: strict mode
// this will be undefined inside a function
// "use strict"

// function geet(){
//     console.log(this);
// }

// geet();// when in non strict in console will point to window global object while when in strict will call undefined

// // for exampl
// let obj ={
//     name : 20
// }
// Object.freeze(obj);
// obj.name = 30;// when in strict mode will give an error but in non strict mode will print the same name without any changes
// console.log(obj);


// 3.Inside a method (object context)
// when this is used inside an object's method, it refers to the object that IT IS INSIDE

// const obj ={
//     name: "ddfk",
//     age: 20,
//     geet: function(){
//         console.log(this);

//     }
// }

// obj.geet();

// ARROW FUNCTION DON'T HAVE THIER OWN THIS 
// instead they inherit this from thier surrounding (lexial) scope.


// const obj ={
//         name: "ddfk",
//         age: 20,
//         geet: function(){
//           let ab=  ()=>{
//                 console.log(this)
//          }
//          ab();// iske paas apna this nhihai toh ye function se uthayega aur function ka this point krta hai on object
//         }
//  }

// obj.geet();

// // inside a class or a constructor 
// // this refers to the instance of object being created
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let a = new Person("rohit",20);
// console.log(a);

let greet = ()=>{
  consolr.log(this);
}

greet();// iss case mein ye global scope ka inherit krega console window pe window scope print hodga wth properties 


