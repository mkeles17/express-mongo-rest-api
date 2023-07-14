export default function makeGetBooks ({ listBooks }) {
    return async function getBooks (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const books = await listBooks()
        return {
          headers,
          statusCode: 200,
          body: books
        }
      } catch (e) {
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }