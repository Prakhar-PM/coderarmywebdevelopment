// document.addEventListener("DOMContentLoaded", () => {
//     const circle = document.querySelector(".circle");

//     // Listen for animation end
//     circle.addEventListener("animationend", () => {
//         // Change text to "High"
//         circle.textContent = "High";
//         setTimeout(() => {
//             // Redirect to the website landing page
//             document.body.innerHTML = `
//                 <div class="welcome">Welcome to Legal AI</div>
//             `;
//         }, 2000); // Wait 2 seconds before displaying the landing page
//     });
// });

const color = ["red","orange","blue","white","yellow","violet"];
function colorchange(){
    const i = Math.floor(Math.random()*color.length);
    return color[i];
    
  }

document.body.addEventListener("click",(event)=>{
    const circle = document.createElement('div');
    circle.className = "circle";
    circle.innerHTML = "Hi";

    const x = event.clientX;
    const y = event.clientY;
    
    
    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;
    

    circle.style.backgroundColor = colorchange();
   
    document.body.appendChild(circle);
    setTimeout(()=>{
       circle.remove(); 
    },5000)
})

