import api from './api';
const weatherInit = () => {
  const api_url = `http://api.openweathermap.org/data/2.5/weather?appid=${api}`
  console.log('hello:', api_url);
}

export default weatherInit;