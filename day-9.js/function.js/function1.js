// let fun = ()=>{
//     console.log("hello coder");
// } 
// fun();

// const sum = (number1, number2) => number1 + number2;
// console.log(sum(3,4));

// const cube = number => number*number*number;
// console.log(cube(5));

// spread operator 
// let sum = function(...number){
//     console.log(number);
//     let number1 = 0;
//     for(let i =0 ;i< number;i++){
//     let number1 =+ number;
//     }
//     console.log(number1);

// }
// sum(3,4,5);
// let sum = function (...number) {
//     console.log(number); // Logs the array of numbers passed
//     let number1 = 0; // Initialize the sum variable
//     for (let i = 0; i < number.length; i++) { // Loop through the array
//         number1 += number[i]; // Add each number to the sum
//     }
//     console.log(number1); // Print the total sum
// };

// sum(3, 4, 5); // Output: [3, 4, 5], 12

// let obj1 ={
//     name : "dsfjnjkf",
//     amount : 40
// }

// function fun(obj){
//     console.log(obj1.name, obj1.amount);
// }

// fun(obj1);
//destructure
let obj1 ={
    name : "dsfjnjkf",
    amount : 40
}

function fun({name, amount}){
    console.log(name, amount);
}

fun(obj1);



