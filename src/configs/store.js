import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from '../reducers'


// const persistedState = {
// 	city: "Seattle"
// }

const middleware = [ thunk ]
if(process.env.NODE_ENV !== 'production'){
	middleware.push(createLogger())
}

const store = createStore(
  reducer,
  //persistedState,
  applyMiddleware(...middleware)
)

//console.log(store.getState())


export default store



