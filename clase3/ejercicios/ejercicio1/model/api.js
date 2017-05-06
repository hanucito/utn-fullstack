const readJSONCPS = require('read-json');
const writeJSONCPS = require('write-json');
const path = require('path');

const booksFile = path.resolve(__dirname, '../data/books.json');
const categoriesFile = path.resolve(__dirname, '../data/categories.json');

const writeJSON = function(file, data) {
  return new Promise(resolve => {
    writeJSONCPS(file, data, (err, res) => {
      if (err) throw err;
      resolve(res);
    })
  })

}

const readJSON = function(file, data) {
  return new Promise(resolve => {
    readJSONCPS(file, (err, res) => {
      if (err) throw err;
      resolve(res);
    })
  })

}



const fetchBooks = () => {
  return new Promise((resolve, reject) => readJSONCPS(booksFile, (error, books) => {
    if (error) {
      return reject(error);
    }
    resolve(books);
  }));
};

const fetchCategories = () => {
  return new Promise((resolve, reject) => readJSONCPS(categoriesFile, (error, categories) => {
    if (error) {
      return reject(error);
    }
    resolve(categories);
  }));
};

const createCategory = data => {
  return fetchCategories()
  .then(categories => {
    console.log(data)

  })
}


const createBook = data => {
  return fetchBooks()
  .then(books => {
    var max = Math.max.apply(null, books.map(book => Number(book.id.substr(1)) ))
    data = Object.assign(data, {
      id: 'b' + (max + 1)
    })
    books.push(data);
    return writeJSON(booksFile, books)
    .then(() => {
      return data;
    })

  })
}


const createCategory = data => {
  return fetchCategories()
  .then(categories => {
    var max = Math.max.apply(null, books.map(book => Number(book.id.substr(0)) ))
    data = Object.assign(data, {
      id: (max + 1)
    })
    categories.push(data);
    return writeJSON(categoriesFile, categories)
    .then(() => {
      return data;
    })

  })
}
module.exports = {
  fetchBooks,
  fetchCategories,
  createBook,
  createCategory
}