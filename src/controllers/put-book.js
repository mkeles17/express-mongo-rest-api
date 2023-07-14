export default function makePutBook ({ updateBook }) {
    return async function putBook (httpRequest) {
      try {
        const bookInfo = httpRequest.body
        
        const toEdit = {
          id: httpRequest.params.id,
          ...bookInfo
        }
        const patched = await updateBook(toEdit)
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 200,
          body: { patched }
        }
      } catch (e) {
        console.log(e)
        if (e.name === 'RangeError') {
          return {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 404,
            body: {
              error: e.message
            }
          }
        }
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }