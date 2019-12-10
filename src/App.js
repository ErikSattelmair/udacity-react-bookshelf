import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'

class BooksApp extends React.Component {
  state = {
  	books: []
  }

  fetchAndUpdateBooks() {
  	 BooksAPI.getAll().then(fetchedBooks => {
    	console.log(fetchedBooks)
      	this.setState({
        	books: fetchedBooks
        })
    })
  }

  componentDidMount() {
 	this.fetchAndUpdateBooks()
  }

  onCategoryChanged = (evt, book) => {
    const selectedShelf = evt.target.value
    
  	if(selectedShelf !== book.shelf) {
    	BooksAPI.update(book, selectedShelf).then(res => {
        	this.fetchAndUpdateBooks()
        })
    }
    
  }

  render() {
    return (
   		<div className="app">
        	<div className="list-books">
            	<div className="list-books-title">
              		<h1>MyReads</h1>
            	</div>
            	<div className="list-books-content">
         			<Bookshelf title={'Currently Reading'} books={this.state.books} onCategoryChanged={this.onCategoryChanged} />
                    <Bookshelf title={'Want to Read'} books={this.state.books} onCategoryChanged={this.onCategoryChanged} />
                    <Bookshelf title={'Read'} books={this.state.books}  onCategoryChanged={this.onCategoryChanged} />
         		</div>
         	</div>
        </div>
  	)
  }
}

export default BooksApp
