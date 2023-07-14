# RESTful API

This is a RESTful API for the anonymous CRUD operations on a books collection based on *Node.js* and *MongoDB*, following the **Clean Architecture principles**.

---

#### To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/mkeles17/express-mongo-rest-api.git
```

Step 2: cd into the cloned repo and run:

```bash
docker compose up
```

API is ready to use on port 3000!

#### API Documentation

POST - /api/books/ -> adds the book data given in the RequestBody to the database. The restrictions are as follows:

* A book **must** have 
    - a title *as string*,
    - an author,
    - price *as number*,
    - isbn *as number*,
    - language *as string*,
    - numberOfPages *as number* ,
    - publisher *as string*
* An author **must** have
    - authorName *as string*,
    - country *as string*,
    - birthDate *as date*,
* Length of the author's name must be greater than 2 characters.
* Price must be a positive number.
* ISBN must be a positive 10 digit integer.
* BirthDate should have one of the following date formats: MM-DD-YYYY or MM.DD.YYY
* The same book cannot be added to database more than once.
* You must use the naming convention as stated above.
* RequestBody must be in JSON format.

Here is a sample valid RequestBody:

    {
    "title": "Little Prince", 
    "author": {
        "authorName": "Antoine de Saint-Exupéry",
        "country": "France",
        "birthDate": "06-29-1900"
    },
    "price": 44.20, 
    "isbn": 6058302517, 
    "language": "French", 
    "numberOfPages": 96, 
    "publisher": "Reynal & Hitchcock"
    }

GET - /api/books/ -> lists all the books in the database collection

PUT - /api/books/:id -> modifies the information of the book with the given id according to the RequestBody. If the id or the RequestBosy is not provided, throws an error. RequestBody must be in JSON format.

DELETE - /api/books/:id - deletes the book with the given id from the database. Throws an error if no such book exists with the given id.

## Author

- [**Mehmet Kutay Keleş**]

## License

This project is licensed under the MIT License.
