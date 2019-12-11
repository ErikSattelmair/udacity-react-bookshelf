import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Seach extends Component {
	
  	state = {
    	foundBooks: []
    }
  	
	createBookList = (books) => {
    	return books.map(book => <Book key={book.id} book={book} onCategoryChanged={this.props.onCategoryChanged} />)
    }

  	searchTermEntered = (evt) => {
    	const searchTerm = evt.target.value
        
      	if(searchTerm.length === 0) {
        	this.setState({
            	foundBooks: []
            })
        } else {
          	const booksOnShelfs = this.props.booksOnShelfs
          	
        	BooksAPI.search(searchTerm, 10).then(res => {
                if(res.error === undefined) {
                  	res.forEach(book => {
                    	const bookOnShelf = booksOnShelfs.find(bookOnShelf => bookOnShelf.id === book.id)
                    	
                        if(bookOnShelf !== undefined) {
                        	book.shelf = bookOnShelf.shelf
                        }
                    })
                  	
                	this.setState({
                		foundBooks: res
                	})
                }
            })
        }
    }
  
	render() {
            	
    	return (
        	<div className="search-books">
            	<div className="search-books-bar">
          			<Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                      {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                      */}
                      <input type="text" placeholder="Search by title or author" onChange={this.searchTermEntered} />

                    </div>
                  </div>
                  <div className="search-books-results">
                    <ol className="books-grid">
						{	
                        	this.createBookList(this.state.foundBooks)
                        }
					</ol>
                  </div>
          </div>
        )
    }
}

export default Seach