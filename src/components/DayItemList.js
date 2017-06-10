import React from 'react'
import PropTypes from 'prop-types'
import DayItem from '../components/DayItem'
import * as StringUtil from '../utils/string'

const DayItemList = function(props){
	if(props.isFetching){
		return <h1>Loading...</h1>
	}

	return (
		<div className="search-result">
			<h1 className="title">{StringUtil.CapitalizeFirstLetter(props.city)}</h1>
			<p className="instruction">Select a day</p>
			<div className="center">
				{ props.weathers.map( 
					d => <DayItem info={d} 
								  key={d.dt} 
								  onClick={(d) => props.handleClick(props.city, d)} /> 
					) 
				}
			</div>
		</div>
	)
}

//complete this
DayItemList.PropTypes = {
	isFetching: PropTypes.bool,
	city: PropTypes.string.isRequired,
	weathers: PropTypes.array,
	handleClick: PropTypes.func
}

export default DayItemList


