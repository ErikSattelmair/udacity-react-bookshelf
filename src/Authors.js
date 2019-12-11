import React, { Component } from 'react'

class Authors extends Component {

  	createAuthors(authors) {
    	return authors.map((author, index) => <div style={{verticalAlign: 'top'}} key={index}>{author}</div>)
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