import api from './api';
import variable_data from './domElement';
const dom_data = variable_data();
const {
  desc_data, danger, alert, form, input_form, btn_form,p_celcius, p_pressure,danger_div,
  city_name, p_humidity, img_icon, weather_desc,  fahr_temp, cels_temp
} = dom_data;

async function fetch_data() {
  try {

    const city = input_form.value;
    const div_display = document.querySelector('.display-data');
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`, {
      mode: 'cors',
    });
  
    const weather_data = await res.json();
    
    const main_temp_data = weather_data.main;
  
    if(weather_data.cod === 200) {
  
      weather_desc.innerHTML = `${weather_data.weather[0].main} - ${weather_data.weather[0].description}`;
      img_icon.src = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`;
      const new_data = kelvin_to_celius(main_temp_data.temp);
      p_celcius.innerHTML = `${new_data} ℃`;
      p_humidity.innerHTML = `Humidity: ${main_temp_data.humidity}%`;
      p_pressure.innerHTML = `Pressure: ${main_temp_data.pressure}`;
      city_name.innerHTML = `${weather_data.name}`
  
      form.reset();

      fahr_temp.addEventListener('click', () => {
        const fahr_data = celcius_to_fahrenheit(main_temp_data.temp)
        p_celcius.innerHTML =  `${fahr_data} F`
      })

      cels_temp.addEventListener('click', ()=> {
        p_celcius.innerHTML = `${new_data} ℃`;
      })
    } 
  
    if(weather_data.cod === 404) {
      p_celcius.innerHTML = `Sorry we could not find any city for your search`;
    }
  } catch (error) {
    danger.innerHTML = `Errro alert`;
  }

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

const setActiveButton = () => {
  const buttons = document.querySelectorAll('.nav_button');

  if (buttons) {
    buttons.forEach( (el, key) => {
      el.addEventListener('click', () => {
        el.classList.add('active');

        buttons.forEach( (ell, els) => {
          if(key !== els) {
            ell.classList.remove('active');
          }
        });
      });
    });
  }
};

const weatherInit = () => {
  btn_form.addEventListener('click', (e) => {
    fetch_data();
    setActiveButton();
    e.preventDefault();
  } 
  );
}


export default weatherInit;