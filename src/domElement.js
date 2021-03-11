const div_display = document.querySelector('.display-data');

const display_celcius = (temp) => {
  const p_celcius = document.querySelector('.celcius');
  p_celcius.innerHTML =  ` ${temp} °С`;
  return p_celcius;
}

export { display_celcius }