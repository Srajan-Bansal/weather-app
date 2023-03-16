// const cityForm = document.querySelector('form');
// const details = document.querySelector('.details');
// const cart = document.querySelector('.cart');
// const time = document.querySelector('img.time');
// const icon = document.querySelector('.icon img');

// const updateUI = async (data) => {
//     const { cityDets, weather } = data;
//     console.log(data);

//     const timeSrc = weather.IsDayTime ? 'icons/sunny day.jpg' : 'icons/night.jpg';
//     time.setAttribute('src', timeSrc);

//     const iconSrc = `icons/${weather.WeatherIcon}.svg`
//     icon.setAttribute('src', iconSrc);

//     details.innerHTML = `
//         <h5 class="my-3">${cityDets.EnglishName}</h5>
//         <div class="my-3">${weather.WeatherText}</div>
//         <div class="display-4 my-4"> 
//         <span>${weather.Temperature.Metric.Value}</span>
//         <span>&deg;C</span>
//         </div>
//     `;

//     // Default look
//     if (cart.classList.contains('d-none')) {
//         cart.classList.remove('d-none');
//     }
// };

// const updateCity = async (city) => {
//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.Key);

//     return { cityDets, weather };
// };

// cityForm.addEventListener('submit', e => {
//     e.preventDefault();

//     const city = cityForm.city.value.trim();

//     updateCity(city)
//         .then(data => { updateUI(data) })
//         .catch(err => { console.log(err) });
// });

const cityForm = document.querySelector("form");
const cart = document.querySelector('.cart');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

  // destructure properties
  const { cityDets, weather } = data;

  // update details template
  details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

  // update the night/day & icon image
  const iconSrc = `icons/${weather.WeatherIcon}.svg`
  icon.setAttribute('src', iconSrc);

  let timeSrc = weather.IsDayTime ? 'icons/sunny day.jpg' : 'icons/night.jpg';
  time.setAttribute('src', timeSrc);


  // remove the d-none class if present
  if (cart.classList.contains('d-none')) {
    cart.classList.remove('d-none');
  }
};

const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets: cityDets,
    weather: weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  // prevent default action
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
