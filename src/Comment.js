//your code here
//import React ( Component ) from 'React'
//use class x exntends component {} syntax
//export the class so it can be used in other files
//import the class in BlogPost

import React, { Component } from 'react'

export default class Comment extends Component {
  render()  {
    return (
      <div className="comment">
      {this.props.commentText}
      </div>
    )
  }
}

