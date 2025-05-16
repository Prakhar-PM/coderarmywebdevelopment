//  const obj8 = {
//      0:20,
//      "name" : " Male",
//      account_ballance : 420,
//      "gender": "Male",
//      age : 30
//  }

//  for (let key in obj8) {
//     console.log(key,":",obj8[key]);  // Access the value dynamically
// }

// console.log(obj8.gender);
// console.log(obj8["account_ballance"]);
// console.log(obj8);
// console.log(obj8["0"]);

// const person = new Object();

// ///property add
// person.name ="dsadion";
// person.gender = "male";
// person.age = 34;
// console.log(person);
// // //delete
//  delete person.age;
//  //modify updfate
//  person.name = "dfkakmf";
//  console.log(person);

//third method 
class people{
    constructor(name,age,gender)
{
   this.gender = gender;
   this.age =age;
   this.name = name;
}
}

let per1 =new people("rohit", 20, "male");
let per2 = new people("fkfvk",56,"fihof");
console.log(per1);
console.log(per2);

let obj  = {
    name : "prakhar",
    age : 20,
    account_ballance: 40,
    gender : "male"
}
const arr = Object.keys(obj);
const arr1 = Object.values(obj);
console.log(arr);
console.log(arr1);

//key value both
const arr3 = Object.entries(obj);
console.log(arr3);

//assign use case
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj4 = {e:5,f:6};

// const obj3 = obj1+obj2; don't do this
const obj3 = Object.assign({},obj1,obj2);//always give a empty object first
obj3.a = 10;
console.log(obj3,obj1);
console.log(obj1.a);

//spread operator
const obj5 ={...obj1,...obj2,...obj4};
console.log(obj5);
//shallow copy and deep copy 
//object freeze 



// arr comes in []
// obj comes in {}
// function comes in ()
// class comes in class