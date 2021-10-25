import React from 'react'
import Book from './Book'
import books from '../books'

// CSS
import '../index.css'

// Components
const BookList = () => {
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

export default BookList
