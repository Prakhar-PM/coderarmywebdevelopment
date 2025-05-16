let obj ={
    name: "rohsn",
    age : 23,
    gender : "male",
    city :"kotwae"
}

// for in loop, i can iterate over keys
for(let key in obj){
    console.log(key, obj[key]); // key is the key and obj[key] is the value
}
// object.keys(obj), make array of keys in object 
console.log(Object.keys(obj));

let obj2 = Object.create(obj);//prototype creation
obj2.money = 4200;
obj2.id = "rog";
console.log(obj2);// only money and id can be changed
console.log(obj2.name);//can print the values of the copy taken from 1
console.log(Object.keys(obj2));// this will print only money and id 
for(let key in obj2)
{
    console.log(key);
}// while the for loop will print both inherited and created
// major question is that if for loop is printing all the properties than why it is not printing the protoype key values properties which object has
//the anser is in prototype .js