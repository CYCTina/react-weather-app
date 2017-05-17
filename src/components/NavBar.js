import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) => (
	<div className='app-header'>
		<h2 className="logo" onClick={props.onLogoClick}>React Weather App</h2>
		{props.children}
	</div>
);

NavBar.PropTypes = {
	children: PropTypes.node
};

export default NavBar;


