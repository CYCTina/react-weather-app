import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl } from 'react-bootstrap';

function SearchInput(props){
	return (
		<div className={'search-weather placement-' + props.style}>
			<FormControl 
				type="text" 
				value={props.value}
				placeholder="Taipei, Taiwan"
				onChange={props.onSearchInputChange} />
			<Button bsStyle="success" onClick={props.onSearchClick}>Get Weather</Button>
		</div>
	)
}

//"http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term

SearchInput.PropTypes = {
	style: PropTypes.oneOf(["block", "inline"]),
	value: PropTypes.string,
	onSearchInputChange: PropTypes.func,
	onSearchClick: PropTypes.func
};

SearchInput.defaultProps = {
	style: "inline"
};

export default SearchInput;