// // a set in javascript is collection of unique values. it allows you to store values without duplicates, which make it different from arrays 

// const set = new Set([10,20,30,40,10,20]);

// console.log(typeof set);

// set.add(4);
// set.add("rohit");
// console.log(set);
// //instagram id 

// const user_id = new Set(["rohi","dfskl","dsjkvn"]);
// let new_user ="fvkjndfkl";
// console.log(user_id.has(new_user));
// user_id.clear();
// console.log(user_id);

// let set1 = new Set([10,20,30]);

// let arr =[1,2,3,4];
// const set2 = new Set(arr);
// arr = [...set2];// converting set again in array by spread operator
// console.log(set2);

let set1 = new Set([1,3,4,5]);
let set2 = new Set([2,3,4,5]);

// union of set
let set3= new Set([...set1,...set2]);
console.log(set3);

// intersectio using filter command
const result = new Set([...set1].filter((num)=>set2.has(num)));// written 
// new set to convert it into set as filter method is used on array

console.log(result);

// iterate over set
//for of loop

// for(let value of set1){
//     console.log(value);
// }
set1.forEach((value)=>console.log(value));

