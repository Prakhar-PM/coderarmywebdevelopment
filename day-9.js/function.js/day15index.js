// const arr = [10,20,30,2];
// for(let value of arr)
// {
//     console.log(value);
// }

// let strinf  = "rohit is good boy";
// for(let value of strinf)   {
//         console.log(value);
//     }
// const obj = {
//     name : "chhavi",
//     age : 22,
//     gender : "dkjnewi",
// };
// // for(let value of obj)
// //     {
// //         console.log(value);
// //     }

// for (let key in obj){
//     console.log(key, obj[key]);
// }
// //but if you want to use of loop then you can do like this 
// for(let value of Object.values(obj))   {
//     console.log(value);
// }
// for(let value of Object.keys(obj))   {
//     console.log(value);
// }
// call back function
// function names(fun){
//     console.log("hello my name is prakhar");
//     fun();
//  }
// function greet(){
//     console.log("greetings for you brother");
//   }

//   names(greet);

// // fetch data function
// function fetchback(){
//     console.log("I am feching data");
// }

// setInterval(fetchback, 5000);

// let arr =[10,20,30];
// arr.forEach( function(fun){
//     console.log(fun);
// }) 
// for each always expect a call back function 
//for ecah with arrow function
// let arr =[10,20,30];
// // arr.forEach( (fun)=>{
// //     console.log(fun);
// // })
// // arr.forEach(num => console.log(num));
// // arr.forEach((num,index) => console.log(num,index));
// arr.forEach((num,index,a) => {
//     a[index] = num*2;
// });
// // single argument = number, second argument = index, third argument = array
// console.log(arr);

// filter 
// let arr =[10,20,30,44,55];
// const result = arr.filter((num)=>{
//       return num%2==0;
// });
// // will filter a new array based on condition
// console.log(result);

// const students = [
//     {name : "rohan",age : 22,marks :70},
//     {name : "mohan",age : 24,marks :30},
//     {name : "dohan",age : 28,marks :70},
//     {name : "johan",age : 32,marks :20},
//     {name : "kohan",age : 52,marks :70},
// ]
// const result = students.filter((ovalue)=>{
// return  ovalue.marks < 50;
// });

// or can be written like this 
// const result = students.filter(({marks}) => marks>50);
// const result2 = students.filter(({age})=> age<100);
// console.log(result);
// console.log(result2);

// const arr = [1,2,3,4];
// const result = arr.map((num)=>{
//     return num + num;
// })
// idhar hum apne result ko modify bhi kar skte hain

// const result = arr.filter((num)=> num%2 == 0).map((num)=> num*num);
// console.log(result);  remember no {}

const arr = [1,2,3,45];
//go to day16.js after this









