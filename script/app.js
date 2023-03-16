const cityForm = document.querySelector('form');
const details = document.querySelector('.details');
const cart = document.querySelector('.cart');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = async (data) => {
    const { cityDets, weather } = data;
    console.log(data);

    const timeSrc = weather.IsDayTime ? 'icons/sunny day.jpg' : 'icons/night.jpg';
    time.setAttribute('src', timeSrc);

    const iconSrc = `icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc);

    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4"> 
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `;

    // Default look
    if (cart.classList.contains('d-none')) {
        cart.classList.remove('d-none');
    }
};

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();

    updateCity(city)
        .then(data => { updateUI(data) })
        .catch(err => { console.log(err) });
});