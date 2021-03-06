import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import Search from './Search'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
  	books: []
  }

  fetchAndUpdateBooks() {
  	 BooksAPI.getAll().then(fetchedBooks => {
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
         	<Route exact path='/' render={() => (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
       				<div className="list-books-content">
         				<Bookshelf title={'Currently Reading'} books={this.state.books} onCategoryChanged={this.onCategoryChanged} />
                    	<Bookshelf title={'Want to Read'} books={this.state.books} onCategoryChanged={this.onCategoryChanged} />
                    	<Bookshelf title={'Read'} books={this.state.books}  onCategoryChanged={this.onCategoryChanged} />
         			</div>
					<Link className='open-search' to='/search'>Open Search</Link>
				</div>)} />
			<Route exact path='/search' render={() => (
              	<Search onCategoryChanged={this.onCategoryChanged} booksOnShelfs={this.state.books} />
            )}  />
        </div>
  	)
  }
}

export default BooksApp
