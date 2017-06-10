import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../styles/App.css'

const Navigation = ({ children }) => (
	<div className='app-header'>
		<Link className="logo" to="/">
			React Weather App
		</Link>
		{children}
	</div>
)

Navigation.propTypes = {
	children: PropTypes.node
}


export default Navigation