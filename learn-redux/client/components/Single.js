import React from 'react'
//圖片跟按鈕是一樣地所以import就可以了
import Photo from './photo'
//import 評論
import Comments from './comments'

const Single = React.createClass({
  render() {
    const { postId } = this.props.params
    //index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId)
    const post = this.props.posts[i]
    // console.log(post)

    const postComments = this.props.comments[postId] || []

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
})

export default Single