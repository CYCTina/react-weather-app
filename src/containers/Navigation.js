import React from 'react';
import PropTypes from 'prop-types';
import History from '../config/History';

class Navigation extends React.Component {

	handleLogoClick = () => {
		History.push("/");
	}

	render(){
		return (
			<div className='app-header'>
				<h2 className="logo" onClick={this.handleLogoClick}>React Weather App</h2>
				{this.props.children}
			</div>
		)
	}
}

Navigation.propTypes = {
	children: PropTypes.node
};


export default Navigation;