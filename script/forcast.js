const api_key = 'YWjG39SsuG6YbFP0hNctaulDIGVbPWpP';

const getWeather = async (id) => { 
    const weather_api = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${api_key}`

    const response = await fetch(weather_api);
    const data = await response.json();
    return data[0];
};

const getCity = async (city) => {
    const city_api = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${api_key}&q=${city}`;

    const response = await fetch(city_api);
    const data = await response.json();
    return data[0];
};

// getCity('New Delhi')
//     .then(data => {
//         console.log(data);
//         return getWeather(data.Key);
//     })
//     .then(data => { console.log(data) })
//     .catch(err => { console.log(err.message) });