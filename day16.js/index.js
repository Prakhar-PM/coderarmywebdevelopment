// const arr = [10,20,30,40];

// const result = arr.reduce(callbck function,initialization) format

// const result = arr.reduce((acc,curr/*value for curr will come frm index  */)=>{
//    acc =acc+curr;
//    return acc;
// }, 0/*value for acc */)

// console.log(result);
let arr = ["orange", "apple","grapes","orange", "apple","grapes","orange", "apple","grapes","orange", "apple","grapes",];

const result = arr.reduce((acc,curr)=>{
   if(acc.hasOwnProperty(curr))
    acc[curr]++;
   else
    acc[curr] =1;
   
   return acc;
},{})

console.log(result);
//video lecture 16,20 minute pe dekh lena ek bar





