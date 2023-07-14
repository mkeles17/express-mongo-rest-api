import Id from '../Id/index.js'
import dotenv from 'dotenv';

dotenv.config();

// Functions to make queries to database, given the connection
export default function makeBooksDb ({ makeDb }) {
  return Object.freeze({
    findAll,
    findByHash,
    findById,
    insert,
    remove,
    update
  })
  async function findAll () {
    const db = await makeDb()
    const result = await db.collection('books').find()
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findById ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('books').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function insert ({ id: _id, hash, ...bookInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('books')
      .insertOne({ _id, hash, ...bookInfo })
    return result
  }
  async function update ({ id: _id, ...bookInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('books')
      .updateOne({ _id }, { $set: { ...bookInfo } })
    return result.modifiedCount > 0 ? { id: _id, ...bookInfo } : null
  }
  async function remove ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('books').deleteOne({ _id })
    return result.deletedCount
  }
  async function findByHash (book) {
    const db = await makeDb()
    const result = await db.collection('books').find({ hash: book.hash })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...insertedInfo } = found[0]
    return { id, ...insertedInfo }
  }
}