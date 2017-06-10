import * as WeatherApi from '../server/api/weathers'

//actions descrbied hat something happended
export const SET_CITY = 'SET_CITY'
export const REQUEST_WEATHERS = 'REQUEST_WEATHERS'
export const RECEIVE_WEATHERS = 'RECEIVE_WEATHERS'

export const setCity = city => ({
	type: SET_CITY,
	city
});

export const requestWeathers = city => ({
	type: REQUEST_WEATHERS
});

export const receiveWeathers = weathersData => ({
	type: RECEIVE_WEATHERS,
	weathersData,
	receivedAt: Date.now()
});

export const fetchWeathers = city => dispatch => {
	//start request
	dispatch(requestWeathers(city));
	//requesting
	WeatherApi.getByLocation(city)
		.then(response => response.data.list)
		.then(list => dispatch(receiveWeathers(list)));

}

// export const getWeather = (city) => ({
// 	type: "GET_WEATHER",
// 	city
// });

// export const displayDayDetail = (index) => ({
// 	type: "DISPLAY_DAY_DETAIL",
// 	index
// });