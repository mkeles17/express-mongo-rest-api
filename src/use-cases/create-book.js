import makeBook from "../book/index.js";

export default function makeCreateBook ({ booksDb }) {
    return async function createBook (bookInfo) {
      const book = makeBook(bookInfo)
      const exists = await booksDb.findByHash({ hash: book.getHash() })
      if (exists) {
        return { message: "The book already exists.", book: exists }
      }

      return booksDb.insert({
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
        id: book.getId(),
        hash: book.getHash()
      })
    }
  }