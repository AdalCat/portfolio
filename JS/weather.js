let key = "f878b5e056a6483a802230515240406"  /* Yes is my key */

function getWeather(){
    let city = document.getElementById("city").value
    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
        .then((response) => {
            if(!response.ok){
                throw new Error("Esta ciudad no fue encontrada")
            }
            return response.json();
        })
        .then((data) => {
            console.log(data)
            if (data && data.current && data.location) {
                document.getElementById("weather").innerHTML =
                `<h2>${data.location.name} ${data.location.country} <img src="${data.current.condition.icon}"></img> </h2>` +
                `<p>Hora local de la muestra: ${data.location.localtime}</p>` +
                `<p>Clima: ${data.current.condition.text}</p>`
            }
        })
}