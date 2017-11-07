import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
//記錄歷史
import { browserHistory } from 'react-router'

//import reduce
import rootReducer from './reducers/index'

import comments from './data/comments'
import posts from './data/posts'

//default data
const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState)
//讀歷史紀錄
export const history = syncHistoryWithStore(browserHistory, store)

export default store