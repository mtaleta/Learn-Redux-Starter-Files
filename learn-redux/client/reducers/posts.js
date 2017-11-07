//reduce接收action及store的初始狀態
//看是要返回或更新狀態

function posts(state = [], action) {
  // console.log( 'The post will change' )
  // console.log(state, action)
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incrementing Likes!')
      const i = action.index
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes +1},
        ...state.slice(i + 1),
      ]
    default: 
      return state
  }
  return state
}

export default posts