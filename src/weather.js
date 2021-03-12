import api from './api';
import variableData from './domElement';

const domData = variableData();
const {
  danger, form, inputForm, btnForm, pCelcius, pPressure,
  cityName, pHumidity, imgIcon, weatherDesc, fahrTemp, celsTemp,
} = domData;


const kelvinToCelius = (kelvin) => {
  const cels = kelvin - 273.15;
  return Math.round((cels + Number.EPSILON) * 100) / 100;
};

const celciusToFahrenheit = (kelvin) => {
  const cels = kelvinToCelius(kelvin);
  const fahrenheit = (cels * (9 / 5)) + 32;
  return fahrenheit;
};


async function fetchData() {
  try {
    const city = inputForm.value;
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`, {
      mode: 'cors',
    });

    const weatherData = await res.json();

    const mainTempData = weatherData.main;

    if (weatherData.cod === 200) {
      weatherDesc.innerHTML = `${weatherData.weather[0].main} - ${weatherData.weather[0].description}`;
      imgIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
      const newData = kelvinToCelius(mainTempData.temp);
      pCelcius.innerHTML = `${newData} ℃`;
      pHumidity.innerHTML = `Humidity: ${mainTempData.humidity}%`;
      pPressure.innerHTML = `Pressure: ${mainTempData.pressure}`;
      cityName.innerHTML = `${weatherData.name}`;

      form.reset();

      fahrTemp.addEventListener('click', () => {
        const fahrData = celciusToFahrenheit(mainTempData.temp);
        pCelcius.innerHTML = `${fahrData} F`;
      });

      celsTemp.addEventListener('click', () => {
        pCelcius.innerHTML = `${newData} ℃`;
      });
    }

    if (weatherData.cod === 404) {
      pCelcius.innerHTML = 'Sorry we could not find any city for your search';
    }
  } catch (error) {
    danger.innerHTML = 'Errro alert';
  }
}

const setActiveButton = () => {
  const buttons = document.querySelectorAll('.nav_button');

  if (buttons) {
    buttons.forEach((el, key) => {
      el.addEventListener('click', () => {
        el.classList.add('active');

        buttons.forEach((ell, els) => {
          if (key !== els) {
            ell.classList.remove('active');
          }
        });
      });
    });
  }
};

const weatherInit = () => {
  btnForm.addEventListener('click', (e) => {
    fetchData();
    setActiveButton();
    e.preventDefault();
  });
};


export default weatherInit;