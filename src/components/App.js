import React, { Component } from 'react';
import '../styles/App.css';
import Navigation from '../containers/Navigation';
import MainWrapper from './MainWrapper';
import Search from '../containers/Search'
import Forecast from '../containers/Forecast';
import DayDetail from './DayDetail';
import Intro from './Intro';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import History from '../config/History';

class App extends Component {

  render() {
    return (
      <div className="app">
    	<Router history={History}>
	        <div>
	        	<Navigation>
	        		<div className="pull-right">
	        			<Search />
        			</div>
	        	</Navigation>
    			<MainWrapper>
    				<Route exact path="/" render={ () => <Intro>
															<Search alignment="block" />
														  </Intro>
							    				  } />
	    			<Route exact path="/forecast" component={Forecast} />
	    			<Route exact path="/forecast/detail" component={DayDetail} />
				</MainWrapper>
	        </div>
    	</Router>
      </div>
    );
  }
}

export default App;
