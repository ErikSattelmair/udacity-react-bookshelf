import React from 'react'
import BookCategoryChanger from './BookCategoryChanger'
import Authors from './Authors'

const Book = (props) => {
  
  return (
  	<li key={props.book.id}>
      <div className="book">
          <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`}}></div>
              <BookCategoryChanger onCategoryChanged={props.onCategoryChanged} book={props.book} />
        </div>
        <div className="book-title">{props.book.title}</div>
        <Authors authors={props.book.authors} />
      </div>
	</li>
  )
  
}

export default Book