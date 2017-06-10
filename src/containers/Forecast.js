import React from 'react'
import queryString from 'query-string'
import { connect } from 'react-redux'
import History from '../configs/history'
import DayItemList from '../components/DayItemList'
import { fetchWeathers } from '../actions/index'


const mapStateToProps = (state, ownProps) => {
	return {
		city: queryString.parse(ownProps.location.search).city,
		isFetching: state.weathers.isFetching,
		weathers: state.weathers.data,
		lastUpdated: state.weathers.lastUpdated
	}
}

//use short hand notation instead when arguments match
// const mapDispatchToProps = (dispatch, ownProps) => ({
// 	getWeathers: function(city){
// 		dispatch(fetchWeathers(city))
// 	}
// })


class Forecast extends React.Component {
	constructor(props){
		super(props)
	}

	componentWillMount(nextProps) {		
		
		this.props.getWeathers(this.props.city)
	}

	componentWillReceiveProps(nextProps) {	
		if(nextProps.city !== this.props.city){
			this.props.getWeathers(this.props.city)
		}
	}

	displayDayWeatherDetail(city, dayWeatherDetail) {
		History.push({
			pathname: "/forecast/detail",
			search: "?city=" + city,
			state: {
				city: city,
				detail: dayWeatherDetail
			}
		})	
	}

	render() {
		return (
			<DayItemList city={this.props.city} 
						weathers={this.props.weathers} 
						isFetching={this.props.isFetching}
						handleClick={this.displayDayWeatherDetail} />
		)
	}
}

export default connect(
	mapStateToProps,
	{ getWeathers: fetchWeathers }
)(Forecast)



