import React from 'react'
import moment from 'moment'
import * as StringUtil from '../utils/string'

function DayDetail(props){
	const detail = props.location.state.detail
	const city = props.location.state.city
	const day = moment.unix(detail.dt)

	return (
		<div className="search-result weather-detail">
			<div className="header-info">
				<h1 className="title">{StringUtil.CapitalizeFirstLetter(city)}</h1>
				<img src={'/images/weather-icons/' + detail.weather[0].icon + '.svg'} alt="weather" />			
				<p>{day.format("dddd, MMM Do")}</p>
			</div>
			<p>{detail.weather[0].description}</p>
			<p>min temp: {detail.temp.min} °C</p>
			<p>max temp: {detail.temp.max} °C</p>
			<p>humidity: {detail.humidity}</p>
		</div>
	)
}

export default DayDetail