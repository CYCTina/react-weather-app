import axios from 'axios';

const url = 'http://gd.geobytes.com/AutoCompleteCity?callback=?&q=';

export function getBySearchTerm(searchTerm) {
	return axios.get(url + searchTerm);
}





