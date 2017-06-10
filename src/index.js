import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import store from './configs/store'
// import './styles/index.css'
// import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <Root store={store} className="app"/>,
  document.getElementById('root')
)


