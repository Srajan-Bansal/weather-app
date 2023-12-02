const api_key = 'gJO8KGDn4um1GKQ2xBtqKynEzk9l6i9E';
// original

const getWeather = async (id) => {
	const request = await fetch(
		`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${api_key}`
	);
	const data = await request.json();
	return data[0];
};

const getCity = async (city) => {
	const request = await fetch(
		`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${api_key}&q=${city}`
	);
	const data = await request.json();
	return data[0];
};
