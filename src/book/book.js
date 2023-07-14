// Book Entity
export default function buildMakeBook ({ Id, md5 }) {
    return function makeBook ({
      title,
      author: {
          authorName,
          country,
          birthDate,
      },
      price,
      isbn,
      language,
      numberOfPages,
      publisher,
      id = Id.makeId()
    } = {}) {

      // ID conditions
      if (!Id.isValidId(id)) {
        throw new Error('Comment must have a valid id.');
      }

      // Title restrictions
      if (!title) {
        throw new Error('Book must have a title.');
      }
      if (typeof(title) !== "string") {
        throw new Error('Title of the book must be a string.');
      }

      // Author Name restrictions
      if (!authorName) {
        throw new Error('Author must have a name.');
      }
      if (typeof(authorName) !== "string") {
        throw new Error('Title of the book must be a string.');
      }
      if (authorName.length < 2) {
        throw new Error("Book author's name must be longer than 2 characters.");
      }

      // Country restrictions
      if (!country) {
        throw new Error('Author must have a country.');
      }
      if (typeof(country) !== "string") {
        throw new Error('Country must be a string.');
      }

      // Birth Date restrictions
      if (!birthDate) {
        throw new Error('Author must have a birth date.');
      }
      let dateObject = new Date(birthDate);
      if(dateObject.toString() === 'Invalid Date'){
        throw new Error('Author Birth Date is invalid.');
      }

      // Price restrictions
      if (!price) {
        throw new Error('Book must have a price.');
      }
      if (typeof(price) !== "number" || price <= 0) {
        throw new Error('Price must be a positive number.');
      }

      // ISBN restrictions
      if (!isbn) {
        throw new Error('Book must have an ISBN.');
      }
      if (typeof(isbn) !== "number" || isbn <= 0) {
        throw new Error('ISBN must be a number. The number must be greater than 0.');
      }
      if (!Number.isInteger(isbn) || isbn.toString().length != 10 ){
        throw new Error('ISBN must be a 10 digit integer');
      }

      // Language restrictions
      if (!language) {
        throw new Error('Book must have a language.');
      }
      if (typeof(language) !== "string") {
        throw new Error('Language must be a string.');
      }

      // Number Of Pages restrictions
      if (!numberOfPages || numberOfPages < 1) {
        throw new Error('Book must have a number of pages value.');
      }
      if (typeof(numberOfPages) !== 'number' || numberOfPages < 1){
        throw new Error('Book must have the feature number of pages. The number must be greater than 1.');
      }

      // Publisher restrictions
      if (!publisher) {
        throw new Error('Book must have a publisher.');
      }
      if (typeof(publisher) !== "string") {
        throw new Error('Publisher must be a string.');
      }
  
      let hash;
  
      return Object.freeze({
        getTitle: () => title,
        getAuthorName: () => authorName,
        getAuthorCountry: () => country,
        getAuthorBirthDate: () => dateObject,
        getPrice: () => price,
        getISBN: () => isbn,
        getLanguage: () => language,
        getNumberOfPages: () => numberOfPages,
        getPublisher: () => publisher,
        getId: () => id,
        getHash: () => hash || (hash = makeHash())
      });
  
      // Custom hash function
      function makeHash () {
        return md5(
          title +
          publisher +
          isbn.toString() +
          authorName +
          language
        );
      }
    };
  }