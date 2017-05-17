import React from 'react';
import PropTypes from 'prop-types';

const Intro = (props) => (
	<div className='app-body'>
		<h1 className='app-intro-title'>Enter a City and State</h1>
		{props.children}
	</div>
);


Intro.PropTypes = {
	children: PropTypes.node
}

export default Intro;