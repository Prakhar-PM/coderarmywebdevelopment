// let obj1 = {
//     a:1,
//     b:2
// }

// let obj2 = obj1;
// //shallow copy
// //both objects poin to same address
// obj2.a = 10;
// console.log(obj2,obj1);

// //deep copy 
// //both object points to different addresses
// let obj3 = structuredClone(obj1);
// obj3.a = 11;
// console.log(obj3,obj1);

//Nested object
// const user ={
//     name : "rohit",
//     balance: 42,
//     address:{
//         pincode : 233231,
//         city:"kotdwar"
//     }
// }

//  const user2 = Object.assign({},user);
//  console.log(user2);
//  //nested wale shallow copy but other deep copy
//  console.log(user.address.pincode);

// agar dono ko alag karna hai ki toh structured clone use kro

//destructuring of an object 
//  let obj  ={
//      name : "pakapk",
//      money : 234,
//      ballance:0,
//      age:23
//  };
// //  console.log(name,ballance,age); //you cannot do this 
//  const{name,ballance,age}= obj;
//  console.log(name,ballance,age);
//  // this is a way of destructuring
//  // another way of doing this is :
//  const{name: full_name, ballance: amount , age : umar} = obj;
//  //console.log(name,ballance,age); can't do this
//  console.log(full_name,amount,umar);


// another way of doing this is this
//...obj1 this object is spresd opewrated to include other elements in this  
// const { name, age,...obj1} = obj;
// console.log(name,age);
// console.log(obj1);

// const arr = [3,2,4,1,5,10];
// const[first,second, ,third] = arr;
//  console.log(first,second,third);

//  let obj7  ={
//     name : "pakapk",
//     money : 234,
//     ballance:0,
//     age:23,
//     arr : [20,40,30,70],
//     aadhar:"fdslfnds",
//     address :{
//         pincode: 1234453646,
//         city:"fnfoeofn"
//     }
//  };

//  const{address}= obj7;
//  console.log(address);

//  const{arr:[first]} = obj7;
//  console.log(first);

// const{arr} = obj7;
//  console.log(arr);

// let user ={
//     name : "pakapk",
//     money : 234,
//     ballance:0,
//     age:23,
//     arr : [20,40,30,70],
//     aadhar:"fdslfnds",
//     address :{
//         pincode: 1234453646,
//         city:"fnfoeofn"
//     },
//     greet: function(){
//         console.log("Hello world");
//     },
//     meet : function(){
//         console,log("hello");
//     }
// };

// user.greet();

// prototype chain 


// let obj7  ={
//         name : "pakapk",
//         money : 234,
//         ballance:0,
//         age:23,
//         arr : [20,40,30,70],
//         aadhar:"fdslfnds",
//         address :{
//             pincode: 1234453646,
//             city:"fnfoeofn"
//         }
//      };

// console.log(obj7.toString())
// // ye tostring aa kahan se raha buitin???
// // yes but now look deeper 
// // a.__proto__ 

// let user1 ={
//     name : "rohit",
//     rollno : 20
// }

// let user2 ={
//     amount :89,
//     money : 45
// }
// // user1.__proto__ = user2;
// // console.log(user2.name);
// // console.log(user1.amount);

// // user2.__proto__ = user1;
// // console.log(user2.name);
// // console.log(user1.amount);


// let arr = [10,20,30,40,50]
// console.log(arr.__proto__ == Array.prototype)
// console.log(arr.__proto__.__proto__ == Object.prototype)
// console.log(arr.__proto__.__proto__.__proto__ == null)