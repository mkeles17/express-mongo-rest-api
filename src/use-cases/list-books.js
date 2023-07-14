export default function makeListBooks ({ booksDb }) {
    return async function listBooks () {
      const books = await booksDb.findAll()
      return books
    }
  }