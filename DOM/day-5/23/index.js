// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
// const orange = document.getElementById('orange');
// const purple = document.getElementById('purple');

// const body = document.body;
// //document.queryselector('body');

// red.addEventListener('click',()=>{
//      body.style.backgroundColor = 'red';
// })
// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';
// })
// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// })
// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = 'orange';
// })
// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';
// });

// const button=document.querySelectorAll('button');
// const body = document.body;
// button.forEach((button)=>{
//      button.addEventListener('click',()=>{
//             body.style.backgroundColor = button.id;
//     })
  
// })

//event bubbling and event capturing
//  addEventListener(event,callback,capture which is by default false)
// event.target->which div in the grandparent tag has been triggerred will be known to the grandparent
// event.currenttarget->which div you clicked will be known to you

const root=document.getElementById('root');
root.addEventListener("click",(event)=>{
    if(event.target.tagName == "BUTTON")
    document.body.style.backgroundColor = event.target.id;
})

// one more optimization of this heading which on clicking heading is changing the color as it has a property of by default background color is black
// the tbe on clicking nothing should change
//event.stoppropogation will stop bubbling


