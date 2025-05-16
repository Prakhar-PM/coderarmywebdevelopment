document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value;
    
    function updateTemp(data){
       const element = document.getElementById('weatherInfo');
       element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
       element.innerHTML += `<br> Today's Condition: ${data.current.condition.text}`;
       element.innerHTML += `<br> Today's Wind: ${data.current.wind_kph}`;
       
       element.innerHTML += `<br> ${data.current.condition.icon}`;
       const img = document.createElement('img');
    }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=b347b6d8a1104e139a144901251005&q=${place}&aqi=yes`)
    prom
    .then(response=>response.json())
    .then(data=> updateTemp(data));



})