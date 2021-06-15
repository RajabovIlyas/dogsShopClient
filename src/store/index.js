import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import sizeReducer from './Size'

let reducers = combineReducers({
	Size: sizeReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store

window.store = store
