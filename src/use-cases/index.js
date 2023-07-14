import makeCreateBook from "./create-book.js";
import makeRemoveBook from "./remove-book.js";
import makeListBooks from "./list-books.js";
import makeUpdateBook from "./update-book.js";
import booksDb from '../data-access/index.js';

const createBook = makeCreateBook({ booksDb });
const removeBook = makeRemoveBook({ booksDb });
const listBooks = makeListBooks({ booksDb });
const updateBook = makeUpdateBook({ booksDb });

const bookService = Object.freeze({
  createBook,
  removeBook,
  listBooks,
  updateBook
});

export default bookService;
export { createBook, removeBook, listBooks, updateBook };