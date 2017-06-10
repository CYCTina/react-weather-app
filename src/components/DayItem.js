import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

class DayItem extends React.Component {

	handleClick(detail){
		this.props.onClick(detail)
	}

	render(){
		const day = moment.unix(this.props.info.dt)

		return (
			<div className="day-forecast" onClick={(e) => this.handleClick(this.props.info)}>
				<img src={'/images/weather-icons/' + this.props.info.weather[0].icon + '.svg'} alt="weather" />			
				<p>{day.format("dddd, MMM Do")}</p>
			</div>
		)
	}
}

DayItem.propTypes = {
	info: PropTypes.object.isRequired,
	onClick: PropTypes.func
};

export default DayItem