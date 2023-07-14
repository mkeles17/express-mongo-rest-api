import makeBook from "../book/index.js";

export default function makeRemoveBook ({ booksDb }) {
  return async function removeBook ({ id } = {}) {
    if (!id) {
      throw new Error('You must supply a book id.')
    }

    const bookToDelete = await booksDb.findById({ id })

    if (!bookToDelete) {
      return deleteNothing()
    }

    return deleteBookById({ id })
  }

  function deleteNothing () {
    return { 
      success: false,
      message: 'Book not found, nothing to delete.'
    }
  }

  async function deleteBookById ({ id }) {
    await booksDb.remove({ id })
    return {
      success: true,
      message: 'Book deleted.'
    }
  }
}