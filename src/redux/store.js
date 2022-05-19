import {applyMiddleware, combineReducers} from 'redux'
import {createStore} from 'redux'
import { authReducer } from './reducers/authReducer'
import thunkMiddleware from 'redux-thunk'
import { companiesReducer } from './reducers/companiesReducer'
import currentCompanyReducer from './reducers/currentCompanyReducer'

const state = {}

const reducer = combineReducers({
  auth:authReducer,
  companies:companiesReducer,
  current: currentCompanyReducer,
})

const thunk = applyMiddleware(thunkMiddleware)

const store = createStore(reducer,state,thunk)

export default store