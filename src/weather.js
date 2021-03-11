import api from './api';
import { display_celcius } from './domElement';

const input_form = document.querySelector('#search-city');
const form = document.querySelector('form');
const btn_form = document.querySelector('#btn-search'); 




async function fetch_data() {
  const city = input_form.value;
  const div_display = document.querySelector('.display-data');
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`, {
  });
  const f_data = await res.json();
  console.log(f_data.main);
  const main_temp_data = f_data.main;
  display_celcius(kelvin_to_celius(f_data.main.temp));
  const p = document.createElement('p');
  p.innerHTML = `${kelvin_to_celius(f_data.main.temp)} °С
    </br>
    ${celcius_to_fahrenheit(f_data.main.temp)} °F
    `;
  div_display.appendChild(p);
}


const kelvin_to_celius = (kelvin) => {
  const cels =  kelvin - 273.15
  return Math.round((cels + Number.EPSILON) * 100) / 100
}

const celcius_to_fahrenheit = (kelvin) => {
  const cels = kelvin_to_celius(kelvin);
  const fahrenheit = (cels * (9/5)) + 32
  return fahrenheit 
}


const weatherInit = () => {
  btn_form.addEventListener('click', (e) => {
    e.preventDefault();
    fetch_data();
  } 
  );
}



export default weatherInit;