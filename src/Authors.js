import React, { Component } from 'react'

class Authors extends Component {

  	createAuthors(authors) {
    	return authors.map((author, index) => <p key={index}>{author}</p>)
    }
  
	render() {
		return (
    		<div className="book-authors">
				{this.createAuthors(this.props.authors)}
      		</div>
    	)
	}

  
}

export default Authors