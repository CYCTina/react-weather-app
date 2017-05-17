import React from 'react';
import SearchInput from '../components/SearchInput';
import History from '../config/History';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: this.props.alignment,
			search: ""
		};
	}

	handleSearchInputChange = (e) => {
		this.setState({
			search: e.target.value
		});
	}

	handleSearch = (e) => {
		if(!this.state.search)
			return;

		console.log(this.props);

		History.push({
			pathname: "/forecast",
			search: "?city=" + this.state.search
		});
	}

	render(){
		return (
			<SearchInput 
				style={this.state.style}
				value={this.state.value}
				onSearchInputChange={this.handleSearchInputChange}
				onSearchClick={this.handleSearch} />
		)
	}
}
	

export default Search;