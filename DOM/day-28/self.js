function feature(callback){
    console.log("Feature 1 is being developed");
    setTimeout(()=>{
        console.log("Feature 1 is completed");
        const obj = {
            name: "Rohit",
            age:28,
            city:"Delhi",
         }
        callback(obj);
    },2000)
    
}

function greet(obj){
    console.log(`Hello ${obj.name}`);
}

feature(greet);