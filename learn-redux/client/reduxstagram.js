import React from 'react'
import { render } from 'react-dom'
//css
import css from './styles/style.styl'
//components
// import Main from './components/Main' Main被import在App
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
//匯入router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

//要有歷史紀錄所以用browserHistory,上面有import所以改用history
//provider使組件層級中的 connect() 方法都能夠獲得 Redux store
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))