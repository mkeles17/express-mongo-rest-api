import {
  removeBook,
  listBooks,
  createBook,
  updateBook
} from '../use-cases/index.js'
import makeDeleteBook from './delete-book.js'
import makeGetBooks from './get-books.js'
import makePostBook from './post-book.js'
import makePutBook from './put-book.js'
import notFound from './not-found.js'
  
const deleteBook = makeDeleteBook({ removeBook })
const getBooks = makeGetBooks({ listBooks })
const postBook = makePostBook({ createBook })
const putBook = makePutBook({ updateBook })
  
const bookController = Object.freeze({
  deleteBook,
  getBooks,
  notFound,
  postBook, 
  putBook
})
  
export default bookController
export { deleteBook, getBooks, notFound, postBook, putBook }