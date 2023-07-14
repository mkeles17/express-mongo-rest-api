import crypto from 'crypto'
import Id from '../Id/index.js'
import buildMakeBook from './book.js'

const makeBook = buildMakeBook({ Id, md5 })

export default makeBook

function md5 (text) {
  return crypto
    .createHash('md5')
    .update(text, 'utf-8')
    .digest('hex')
}
