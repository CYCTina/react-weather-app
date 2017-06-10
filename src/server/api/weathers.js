import axios from 'axios';

const api_key = '1db5b60266b42d97a054bd5825b2c7ff';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

export function getById(locationId){
	return axios.get(url + '?&id=' + locationId + '&appid=' + api_key);
};

export function getByLocation(location){
	return axios.get(url + '/daily?q=' + location + '&type=accurate&units=metric&cnt=5&appid=' + api_key);
};
