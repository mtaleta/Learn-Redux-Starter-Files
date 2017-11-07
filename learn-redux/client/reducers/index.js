//整合reducers
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import comments from './comments'

//router讓他找到回家的路
const rootReducer = combineReducers({posts, comments, routing: routerReducer})

export default rootReducer