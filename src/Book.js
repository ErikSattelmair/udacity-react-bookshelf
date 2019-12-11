import React from 'react'
import BookCategoryChanger from './BookCategoryChanger'
import Authors from './Authors'
import PropTypes from 'prop-types';

const Book = (props) => {
  
  return (
  	<li key={props.book.id}>
      <div className="book">
          <div className="book-top">  
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.book.imageLinks !== undefined ? `url(${props.book.imageLinks.smallThumbnail})` : null}}></div>
              <BookCategoryChanger onCategoryChanged={props.onCategoryChanged} book={props.book} />
        </div>
        <div className="book-title">{props.book.title}</div>
		{props.book.authors !== undefined &&
			<Authors authors={props.book.authors} />
		}
      </div>
	</li>
  )
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onCategoryChanged: PropTypes.func.isRequired 
}

export default Book