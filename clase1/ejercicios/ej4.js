/**
* Refactor ej3. 
*
* 1) Modificar el flow principal del programa usando Promise.All para evitar el uso de variables globales
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

const getPeople = function(param) {
  return readJSON('../data/people.json')
  .then(people => {
    if (param && typeof param.filter === 'function') people = people.filter(param.filter);
    if (param && typeof param.find === 'function') {
      const item = people.find(param.find);
      if (!item) throw new Error('not found');
      return item;
    }
    return people;
  })
}

const getFilms = function(param) {
  return readJSON('../data/films.json');
}

const getFilmsByActorName = function(name) {
  return Promise.all([
    getFilms(),
    getPeople({
      find: item => item.name === name
    })
  ])
  .then(([films, person]) => {
    return films
    .filter(film => person.films.includes(film.id))
    .map(film => film.title)
  })
}
	
getFilmsByActorName('Luke Skywalker')
.then(films => writeJSON('ej4.json', films))
.then(() => console.log('ej4.json', 'written'))
.catch(err => console.error(err))
