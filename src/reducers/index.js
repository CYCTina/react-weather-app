//reducers described how application state changes in response to actions

import { combineReducers } from 'redux'
import { SET_CITY, REQUEST_WEATHERS, RECEIVE_WEATHERS } from '../actions'

const city = (state = "", action) => {
	switch(action.type){
		case SET_CITY: 
			return action.city
		default: 
			return state
	}
}

const weathers = (state = {
	isFetching: false,
	lastUpdated: null,
	data: []
}, action) => {
	switch(action.type){
		case REQUEST_WEATHERS:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_WEATHERS: 
			return Object.assign({}, state, {
				isFetching: false,
				lastUpdated: action.receivedAt,
				data: action.weathersData
			})
		default: 
			return state

	}
}


const reducer = combineReducers({
		city,
		weathers
	})


export default reducer