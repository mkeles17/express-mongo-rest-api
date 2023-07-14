import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import bookController from './controllers/index.js'
import makeCallback from './express-callback/index.js'
import notFound from './controllers/not-found.js'

dotenv.config();

// const apiRoot = process.env.DM_API_ROOT;
// I could not figure out why the above code doesn't work so I had to explicity write the code as below:
const apiRoot = '/api'

const app = express();
app.use(bodyParser.json());

app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
});

// setting up routes for the crud operations
app.post(`${apiRoot}/books`, makeCallback(bookController.postBook));
app.delete(`${apiRoot}/books/:id`, makeCallback(bookController.deleteBook));
app.delete(`${apiRoot}/books`, makeCallback(bookController.deleteBook));
app.put(`${apiRoot}/books/:id`, makeCallback(bookController.putBook));
app.put(`${apiRoot}/books`, makeCallback(bookController.putBook));
app.get(`${apiRoot}/books`, makeCallback(bookController.getBooks));
app.use(makeCallback(notFound));


const port = 3000;

// listen for requests
app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})

export default app