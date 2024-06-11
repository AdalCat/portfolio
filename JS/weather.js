/* Se crea una constate con mi llave de la API */
const key = "f878b5e056a6483a802230515240406"  /* Yes is my key */

/* Funcion que hace la consulta a la API y crea el formato de los datos */
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

            /* Crear calculadora de indice UV */
/*             let uv = data.current.uv
            let id
            if (uv >= 9) {
                id = "Extremo"
                document.getElementById("iuv").innerHTML = id
                console.log("Extremo")
            }else if(uv >= 6){
                id = "Alto"
                document.getElementById("iuv").innerHTML = id
                console.log("Alto")
            }else if(uv >= 3){
                id = "Moderado"
                document.getElementById("iuv").innerHTML = id
                console.log("Moderado")
            }else if(uv <= 2){
                id = "Bajo"
                document.getElementById("iuv").innerHTML = id
                console.log("Bajo")
            } */
            if (data && data.current && data.location) {
                console.log(data)
                document.getElementById("weather").innerHTML =
                `<h2>${data.location.name} ${data.location.country} <img src="${data.current.condition.icon}"></img> </h2>` +
                `<p>Hora local de la muestra: ${data.location.localtime}</p>` +
                `<p>Temperatura ${data.current.temp_c}ºC</p>`+
                `<p>La sensacion termica es de ${data.current.feelslike_c}ºC</p>`+
                `<p>Clima: ${data.current.condition.text}</p>`+
                `<p>Humedad: ${data.current.humidity}%</p>`+
                `<p id="iuv">Indice UV: ${data.current.uv}</p>`+
                `<p>La velocidad del viento es de : ${data.current.wind_kph}kph hacia el ${data.current.wind_dir}</p>`
                return data
            }
            
        })
        .catch((error) => {
            alert(error)
        });

        
        
}

/* Se añade un escuhante para cuando el usuario presione enter en el input city llame a la funcion que consulta a la API */
city.addEventListener("keypress", function(event){
    if (event.key === 'Enter') {
        getWeather()
    }
})


