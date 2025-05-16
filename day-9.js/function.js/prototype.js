// let obj ={

// };
// obj.name = "rohit";
// // key value palue pair by default add writable enumerable configurable 
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// // if writable =  true means that you can modify/change the property
// // if configurable = true means that you can change the properties of eritable enumerable 
//// enumerable : if false that particular property/key will be stoped showing, even inherited properties key for for loop
// obj.name = "mohit";
// // how i can create these  writable: true,enumerable: true, configurable: true,
// let obj1 = {}; 
// Object.defineProperty(obj1, 'name', {
//     value : "rohit",
//     writable: false,
//     enumerable: true,
//     configurable: true,
// })  
// obj1.name = "sfjnjskf";
// console.log(obj1);


// enumerable
const customer = {
    name : "rohit",
    age : 23,
    account_number : 123,
    balance : 2000,
}

// name ,age ,
// Object.defineProperty(customer, "name",{
//     configurable:false,
// })
// Object.defineProperty(customer, "name",{
//     writable : false,
// })
Object.defineProperty(customer, "name",{
   enumerable : false,
})
// customer.name = " goadfjkn";
console.log(customer);

for (let key in customer){
    console.log(key);
}
// like here because  enumerable : false, so name won't be printed  
console.log(Object.getOwnPropertyDescriptor(Object.prototype , "toString"));
 
// toh basically protype wale ka ennumerable false hota ahi that's why
// for in loop ko array ke sath nhi likhjte





