// // creating a new li item in already created list
// // const element = document.createElement('li');
// // element.innerHTML = "TS";

// // const parent = document.getElementsById("root");
// // parent.appendChild(element);

// // or i can make this as a function which on calling will call one by one the different 

//  function attach(content){
//  const element = document.createElement('li');
//  element.innerHTML = content;

//  const element2 = document.createElement('li');
//  element2.innerHTML = content + "V2.0";

//  const parent = document.getElementById("root");
//  parent.appendChild(element);
//  parent.append(element,element2);
//  }

//  attach("rs");
//  attach("sd");
//  attach("node");
// how to create text node (without text tags )

// const element =document.createTextNode("hello coder army");
// const parent = document.getElementById("root");
// parent.append(element);

// to set an id for this element
// const element = document.createAttribute("id");
// element.value = "first";

// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(element);
// but this will only give id to the first li 
// now if we have to give id to second li then we need to give child node 

// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);

//access attribute of a class
// const element = document.getElementById("root");
// console.log(element.getAttribute("class"));
// element.removeAttribute("class");

//Add nodes to the DOm
// const parent = document.getElementById("root");
// const element = document.createElement('li');
// element.innerHTML = "ts";

// parent.prepend(element);//insert before the li
// parent.append(element);



/*
// function abc(){
//     console.log(abc.xyz);
// }

// abc();
// abc.xyz = 100;
// abc.xyz = 300;
// abc();

// const numbers = [1,2,3,4];
// numbers[100] = 500;
// console.log(typeof typeof 100);

// const arr = [..."prav","raveen"]
// console.log(parseInt('10+2'))
// console.log(parseInt('7FM'))
// console.log(parseInt('FM7'))

donot consider it as part of code
*/

// if we want to make insert a node on a specific list items

// const parent = document.getElementById("root");
// const element = document.createElement('li');
// element.innerHTML = "ts";

// const child2 = parent.children[1];
// parent.insertBefore(element,child2);

// insertBefore(newnode,refrencenode);

//replacechild
// parent.replaceChild(element,child2);

//we can do same using innerhtml
// const parent = document.getElementById("root");
// parent.innerHTML = "dkm";
// this will remove all the contents already present in the root id and will only print innerHtml part
// but if we write this then all the contents will be printed including the innerhtml part
// parent.innerHTML += "dkm";  // it will be printed after
// parent.innerHTML += "<li>dkm</li>";
// parent.innerHTML += "dkm";

// i want to create a new div tag that comes before ul items
// const parent = document.getElementById("root");
// const element = document.createElement("div");
// element.innerHTML = "hello coder army";

// parent.insertAdjacentElement("beforebegin",element);
// beforebegin : before the element itself.
// afterbegin : Inside the element , before its last child
// beforeend: Inside the element , after its last child
//afterend : after the element itself

// delete node or element
// const element = document.querySelector('li');
// element.remove();
for (let i = 0; i < 5; i++) {

    if (i === 3) break;
  
    console.log(i);
  
  }





