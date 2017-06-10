import React from 'react'
import PropTypes from 'prop-types'
import History from '../configs/history'
import { Button } from 'react-bootstrap'

class SearchInput extends React.Component{

	getInputValue = () => {
		return this.textInput.value
	}

    handleClick = () => {
		let val = this.getInputValue()

		History.push({
			pathname: "/forecast",
			search: "?city=" + val
		})
	}

	handleKeyUp = (e) => {
		if(e.keyCode === 13){
			this.handleClick()
		}
	}	

	render() {
		return(
			<div className={'center search-weather placement-' + this.props.alignment}>
				<input type="text"
					className="form-control"
					ref={ input => this.textInput = input }
					placeholder="Taipei, Taiwan"
					onChange={this.handleChange}
					onKeyUp={this.handleKeyUp} />
				<Button bsStyle="success" onClick={this.handleClick}>Get Weather</Button>
			</div>
		)
	}
}


SearchInput.PropTypes = {
	alignment: PropTypes.oneOf(["block", "inline"]),
	onClick: PropTypes.func
}

SearchInput.defaultProps = {
	alignment: 'inline'
}

export default SearchInput