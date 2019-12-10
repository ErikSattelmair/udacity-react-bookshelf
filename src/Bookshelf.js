import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
 
  	findBooksByCategory(title, books) {
    	return books.filter(book => book.shelf.split(' ').join('').toLowerCase() === title.split(' ').join('').toLowerCase());
    }
  	
  	createBookElements(books) {
    	return books.map(book => <Book key={book.id} book={book} onCategoryChanged={this.props.onCategoryChanged} />)
    }
  	
	render() {
      	let { title, books } = this.props
      	const relevantBooks = this.findBooksByCategory(title, books)
      	
      	return (
        	<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                	<ol className="books-grid">
          				{this.createBookElements(relevantBooks)}
          			</ol>
          		</div>
          	</div>
          		
        )
    }
  
}

export default Bookshelf