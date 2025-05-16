// this is a self practice to do what sir did in the class
// No need to run this code, just for practice
// let's see the approach 
// so in the question we have to make a code which runs a quiz > Now earlier what we did was that we created a index.html and wrote the quiz code there but now requiremwnt has changed to make it from scratch so now concentrating on that part 
// so we have to create a quiz from js 
// first of all we will haave a pool of question and answer in form of object 
// why object because we have to store the question and answer in a single variable 
// so we will create an array of object

const questionBank = [
    { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },
    { question: "Which country won the first ICC Cricket World Cup?", options: ["Australia", "England", "West Indies", "India"], answer: "West Indies" },
    { question: "Who is known as the 'God of Cricket'?", options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"], answer: "Sachin Tendulkar" },
    { question: "What is the highest individual score in ODI cricket?", options: ["264", "200", "237", "275"], answer: "264" },
    { question: "Which bowler has taken the most wickets in Test cricket?", options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"], answer: "Muttiah Muralitharan" },
    { question: "Which Indian player is known as the 'Hitman'?", options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Shikhar Dhawan"], answer: "Rohit Sharma" },
    { question: "Who won the ICC Cricket World Cup 2011?", options: ["India", "Sri Lanka", "Australia", "England"], answer: "India" },
    { question: "Who holds the record for the fastest century in ODI cricket?", options: ["AB de Villiers", "Chris Gayle", "Shahid Afridi", "Virat Kohli"], answer: "AB de Villiers" },
    { question: "Which country is known as the Proteas in cricket?", options: ["South Africa", "Australia", "England", "New Zealand"], answer: "South Africa" },
    { question: "Who has the most sixes in international cricket?", options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "Shahid Afridi"], answer: "Chris Gayle" },
    { question: "Which team has won the most ICC Cricket World Cups?", options: ["Australia", "India", "West Indies", "England"], answer: "Australia" },
    { question: "Who is the youngest player to score a century in international cricket?", options: ["Shahid Afridi", "Virat Kohli", "Sachin Tendulkar", "Rashid Khan"], answer: "Shahid Afridi" },
    { question: "Which cricket stadium is the largest in the world?", options: ["Narendra Modi Stadium", "MCG", "Lord's", "Eden Gardens"], answer: "Narendra Modi Stadium" },
    { question: "Who is the fastest bowler in cricket history?", options: ["Shoaib Akhtar", "Brett Lee", "Shaun Tait", "Mitchell Starc"], answer: "Shoaib Akhtar" },
    { question: "Which player has the highest batting average in Test cricket?", options: ["Don Bradman", "Steve Smith", "Kane Williamson", "Jacques Kallis"], answer: "Don Bradman" },
    { question: "Who is the captain of the Indian cricket team in 2023?", options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Hardik Pandya"], answer: "Rohit Sharma" },
    { question: "Which bowler has the best bowling figures in ODI cricket?", options: ["Chaminda Vaas", "Muttiah Muralitharan", "Glenn McGrath", "Anil Kumble"], answer: "Chaminda Vaas" },
    { question: "Which country is known as the Black Caps in cricket?", options: ["New Zealand", "South Africa", "England", "West Indies"], answer: "New Zealand" },
    { question: "Who is the highest run-scorer in T20 internationals?", options: ["Virat Kohli", "Rohit Sharma", "Babar Azam", "Chris Gayle"], answer: "Virat Kohli" },
    { question: "Which cricket ground is known as the 'Home of Cricket'?", options: ["Lord's", "MCG", "Eden Gardens", "The Oval"], answer: "Lord's" }
 ];
//
//  select 5 random question to display on the form
//  code 
function RandomQuestion(){
        const data = new Set();
    // use set for unique object
    
        while(data.size!=5){
            const index = Math.floor(Math.random()*20);
            data.add(questionBank[index]);
        }
 
        // convert set into array
        return [...data]; // returning in form of array 
        }

        // now we have to create a form and insert all the elements into it
        // obj =  { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },
        // so we have to create a form and insert all the elements into it
        // how we can do that
        // going to the code part
        
        var form = document.querySelector('form');
        const original_answer = {};
        
        // after creating the form we have to insert the elements into it
        // so we have to create a form and insert all the elements into it      
        // so now we call the function again so that we can extract the question and answer from the object

        const problem = RandomQuestion();

        problem.forEach((obj,index) => {
            // create a div element for each question
            const div_element = document.createElement('div');
            div_element.className = "question";
            original_answer[`question${index+1}`] = obj['answer']; // store the answer in the original_answer object
            // create a label for the question
            const para = document.createElement('p');
            para.textContent = `${index+1}. ${obj['question']}`;
            div_element.appendChild(para);

            // create 4 options for the question
            obj['options'].forEach((option, index) => {
                const label = document.createElement('label');
                // label.textContent = option;
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question${index}`; // name should be same for each question
                input.value = option; // value should be the option

                label.appendChild(input);
                label.appendChild(document.createTextNode(option)); // append the text node to the label
                div_element.appendChild(input);
                div_element.appendChild(label);
                div_element.appendChild(document.createElement('br')); // line break after each option
            })

            form.appendChild(div_element); // append the div element to the form
           
        })

        const button = document.createElement('button');
        button.type = "Submit"; // submit button
        button.textContent = "Submit"; // text for the button
        form.appendChild(button); // append the button to the form
        // now we have to create a function which will check the answer and return the result

        
         // rather than making array we made objects as it is more accurate than array as
         
         
         form.addEventListener('submit',(event)=>{
             
            event.preventDefault();
            const data = new FormData(form);
         
         
         //    const answer = Array.from(data.values());
            
         //    let result = 0;
         //    for(let i=0;i<answer.length;i++)
         //    { if(answer[i]===original_answer[i])
         //         result++;
         //    }
         
            let result = 0
         
            for(let [key,value] of data.entries())
            {
             if(value===original_answer[key])
                 result++;
            }
         
            const out = document.getElementById('out');
            out.innerText = `${result} out of 5 is correct`;
         
         //    document.getElementById('container').append(out);
         
         //    form.reset();
         
         })
       
        
        


