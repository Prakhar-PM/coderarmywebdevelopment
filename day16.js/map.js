// // in javascript map is a collection of key value pair where both the keys and values can be of any data type
// // unlike object it maintain order of keys wrt to insertion
// //key shoul be unique
// const map1 = new Map();
// map1.set("rohit",45);
// map1.set(20,"mohan");

// // map1.set("rohi",34); valu will be updated of rohit 

// map1.delete("rohit");

// console.log(map1);
//another method
const map1 = new Map([
    [4,"rohit"],
    ["mohan",3]
])

for(let [key,value] of map1){
console.log(key,value);
}
//object:
// keys:string,symbol
//maps:
//keys:number,string,object

