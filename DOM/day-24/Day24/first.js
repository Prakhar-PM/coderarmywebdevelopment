const form = document.querySelector('form');

// form.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('change', (event)=>{
//         console.log(event.target.value);
// })

// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('dblclick', (event)=>{
//     // console.log(event.target.value);
//     console.log("double click")
// })

// form.addEventListener('reset', (event)=>{
//     // console.log(event.target.value);
//     console.log("form Reset");
// })

form.addEventListener('submit',(event)=>{

    event.preventDefault();
   // prevent refresh and help store some data 
   // now question is if we have 100 input fields then do we have to access data like this 100 times 
    // const first = document.getElementById("first");
    // console.log(first.value);

    // const second = document.getElementById("second");
    // console.log(second.value);

    // const third = document.getElementById("third");
    // console.log(third.value);

    const data = new FormData(form);
    //this is an objext which will give you all data corresponding to the form you passed in this 
    
    for(let [key,value] of data.entries())
        console.log(key, value);// this will give you data in form of arrays whil you can also for each 

    console.log(Array.from(data.keys()));
    console.log(Array.from(data.values()));

    // keys values



    // const result = document.getElementById('result');
    // result.innerText = `${first.value} ${second.value} is a good Boy`;

    // document.body.append(result);



})
