const variable_data = () => {

const div_display = document.querySelector('.display-data');
const desc_data = document.getElementById('weather-icons');
const danger = document.querySelector('.danger');
const alert = document.getElementById('alert');
const form = document.querySelector('#form-data');

const input_form = document.querySelector('#search-city');
const btn_form = document.querySelector('#btn-search'); 
  const p_celcius = document.querySelector('.celcius');

  const p_humidity = document.querySelector('.humidity');
  const p_pressure = document.querySelector('.pressure');

  const img_icon = document.createElement('img');
  const weather_desc = document.getElementById('weather-desc');
  const city_name = document.querySelector('.city-name');
  const fahr_temp = document.getElementById('fahr-temp');
  const cels_temp = document.getElementById('cels-temp');
  const danger_div = document.getElementById('danger-div');


  desc_data.appendChild(img_icon);


  return {
    desc_data ,danger,
     alert, form, input_form, btn_form, p_celcius,danger_div,
      p_humidity, img_icon, weather_desc, city_name, fahr_temp, cels_temp, p_pressure
  };
};

export default variable_data