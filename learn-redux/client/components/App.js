import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import action
import * as actionCreators from '../action/actionCreate'
import Main from './Main'


//mapStateToProps(state, [ownProps]): stateProps組件將會監聽 Redux store 的變化。
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
//bindActionCreators方法把actions和dispatch合併
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
//mapDispachToProps(dispatch, [ownProps]): dispatchProps
//如果傳遞的是一個對象，那麼每個定義在該對象的函數都將被當作 Redux action creator，
//對象所定義的方法名將作為屬性名；每個方法將返回一個新的函數，函數中dispatch方法會將
//action creator的返回值作為參數執行。這些屬性會被合併到組件的 props 中。
//connect(mapStateToProps, mapDispatchToProps, mergeProps)(MyComponent)
const App = connect(mapStateToProps, mapDispachToProps)(Main)

export default App