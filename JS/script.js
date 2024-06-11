function getIp() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const userIp = data.ip
        document.getElementById("userIp").innerHTML = userIp
    })
}

getIp()