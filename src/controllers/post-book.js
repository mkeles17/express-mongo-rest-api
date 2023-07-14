export default function makePostBook ({ createBook }) {
    return async function postBook (httpRequest) {
      try {
        const bookInfo = httpRequest.body
        const posted = await createBook({ ...bookInfo })
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 201,
          body: { posted }
        }
      } catch (e) { 
        console.log(e)
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