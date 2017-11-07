//增加increment
//type代表行為,因為只要計算位置所以只要index就好,減少資料
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
//新增評論add comment
//要知道id,作者跟內容
export function addComment(postId, author, comment) {
  console.log('Dispatching add comment')
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
//移除評論remove comment
//要知道哪張圖的id跟位置
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

