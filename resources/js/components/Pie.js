import React from 'react';
import ReactDOM from 'react-dom';
let url = 'https://api.openweathermap.org/data/2.5/weather?q=playa%20del%20carmen&APPID=939aae2cc565a6f67803922eca539920';

export default function Pie() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => showData(data))
        .catch((error) => console.log(error));

    const showData = (data) => {
        console.log(data)
        let datos = "";
        datos += `
            <h1 class="text-white">El clima en tu ciudad</h1>
            <li class="text-white">
                Ciudad: ${data.name}
            </li>
            <li class="text-white">
                Pais: ${data.sys.country}
            </li>
            <li class="text-white">
                Descripcion: ${data.weather[0].description}
            </li>
            <li class="text-white">
                Temperatura: ${data.main.temp}
            </li>
            <li class="text-white">
                Temperatura: ${data.main.humidity}
            </li>
        `;
        document.getElementById('pie').innerHTML = datos;
    }
}

Pie();