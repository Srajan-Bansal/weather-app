const form = document.querySelector("form");
const cart = document.querySelector(".cart");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  if (cart.classList.contains("d-none")) {
    cart.classList.remove("d-none");
  }

  const { cityDetails, weather } = data;
  console.log(weather);

  details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        `;

  const iconSrc = `icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = weather.IsDayTime ? "icons/sunny day.jpg" : "icons/night.jpg";
  time.setAttribute("src", timeSrc);
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return {
    cityDetails,
    weather,
  };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = form.city.value.trim();
  form.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
