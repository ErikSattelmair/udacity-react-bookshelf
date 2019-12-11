import React from 'react'
import PropTypes from 'prop-types';

const BookCategoryChanger = (props) => {

	return (
      <div className="book-shelf-changer">
		<select onChange={(evt) => props.onCategoryChanged(evt, props.book)} value={props.book.shelf === undefined ? 'none' : props.book.shelf} >
			<option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
		</select>
	  </div>
  	)
}

BookCategoryChanger.propTypes = {
	onCategoryChanged: PropTypes.func.isRequired,
  	book: PropTypes.object.isRequired
}

export default BookCategoryChanger