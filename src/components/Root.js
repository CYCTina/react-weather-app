import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { Route } from 'react-router-dom'
import Navigation from './Navigation'
import SearchInput from './SearchInput'
import DayDetail from './DayDetail'
import Intro from './Intro'
import MainWrapper from './MainWrapper'
import Forecast from '../containers/Forecast'
import history from '../configs/history'
import '../styles/index.css'
import '../styles/App.css'


const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={history}>
	        <div>
	        	<Navigation>
	        		<div className="pull-right">
	        			<SearchInput />
        			</div>
	        	</Navigation>
    			<MainWrapper>
    				<Route exact path="/" render={ () => <Intro>
															<SearchInput alignment="block" />
														  </Intro>
							    				  } />
	    			<Route exact path="/forecast" component={Forecast} />
	    			<Route exact path="/forecast/detail" component={DayDetail} />
				</MainWrapper>
	        </div>
    	</Router>
	</Provider>
)

export default Root