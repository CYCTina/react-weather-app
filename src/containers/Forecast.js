import React from 'react';
import queryString from 'query-string';
import DayItem from '../components/DayItem';
import * as WeatherResource from '../server/resources/weathers';
import * as StringUtil from '../utils/string';

class Forecast extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
        	forecastData: []
		};
	}

	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps");		
		this.city = queryString.parse(nextProps.location.search).city;
		this.getWeather(this.city);
	}

	componentDidMount(){
		console.log("componentDidMount");		
		this.city = queryString.parse(this.props.location.search).city;
		this.getWeather(this.city);
	}

	getWeather(city) {
		WeatherResource.getByLocation(city).then(
			function(response){
				this.setState({
					isLoading: false,
					forecastData: response.data.list
				});
			}.bind(this)
			,function(err){
				//log err
			});
	}

	handleClick = (weatherDetail) => {
		weatherDetail.city = this.city;

		this.props.history.push(
			{
				pathname: '/forecast/detail',
				search: "?city=" + this.props.city,
				state: { 
					detail: weatherDetail
				}
			}
		);
	}

	render() {
		return (
			<div>
				{this.state.isLoading ? (
					<h2>Loading...</h2>
				) : (
					<div className="search-result">
						<h1 className="title">{StringUtil.CapitalizeFirstLetter(this.city)}</h1>
						<p className="instruction">Select a day</p>
						<div>
							{ this.state.forecastData.map( d => <DayItem info={d} key={d.dt} onClick={(e) => this.handleClick(d) } /> ) }
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default Forecast;