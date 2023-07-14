import makeBook from "../book/index.js";

export default function makeUpdateBook ({ booksDb }) {
    return async function updateBook ({ id, ...changes } = {}) {
      if (!id) {
        throw new Error('You must supply an id.');
      }
      if (!changes) {
        throw new Error('You must supply book attributes.');
      }
      const existing = await booksDb.findById({ id })

      if (!existing) {
        throw new RangeError('Book not found.')
      }
      
      const book = makeBook({ ...existing, ...changes})

      const updated = await booksDb.update({
        id: book.getId(),
        title: book.getTitle(),
        author: {
          authorName: book.getAuthorName(),
          country: book.getAuthorCountry(),
          birthDate: book.getAuthorBirthDate()
        },
        price: book.getPrice(),
        isbn: book.getISBN(),
        language: book.getLanguage(),
        numberOfPages: book.getNumberOfPages(),
        publisher: book.getPublisher(),
        hash: book.getHash()
      })
      
      return {
        success: true,
        message: 'Book updated.'
      }
    }
  }