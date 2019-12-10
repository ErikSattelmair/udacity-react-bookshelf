import React from 'react'

const BookCategoryChanger = (props) => {
  
	return (
      <div className="book-shelf-changer">
		<select onChange={props.onCategoryChanged} value={props.category} >
			<option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
		</select>
	  </div>
  	)
  
}

export default BookCategoryChanger