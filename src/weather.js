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
  
}


const weatherInit = () => {
  btn_form.addEventListener('click', (e) => {
    e.preventDefault();
    fetch_data();
  } 
  );
}



export default weatherInit;