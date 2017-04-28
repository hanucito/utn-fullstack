/**
* Refactor ej2. 
* 
* 1) Cambiar la API de readJSON y writeJSON para retornar promises.
* 2) Modificar el flow principal del programa usando promises en lugar de callbacks anidados
*/

const fs = require('fs');

const readJSON = function(file) {
  return new Promise(resolve => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err;
      return resolve(JSON.parse(data))
    })  
  })
}

const writeJSON = function(file, data, callback) {
  return new Promise(resolve => {
    var json = JSON.stringify(data);
    fs.writeFile(file, json, (err) => {
      if (err) throw err;
      return resolve(json);
    })
  })
}

readJSON('../data/films.json')
.then(films => {
  return writeJSON('ej3.json', films)
})
.then(res => {
  console.log('ej3.json', 'written')
})
.catch(err => {
  console.error(err)
})
