import React, { Component } from 'react'
import PropTypes from 'prop-types';

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

Authors.propTypes = {
	authors: PropTypes.array.isRequired
}

export default Authors