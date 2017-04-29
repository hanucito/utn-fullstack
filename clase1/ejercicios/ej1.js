/*
* En un archivo ej1.json, guardar todas los nombres de las peliculas en las que aparece el personaje Luke Skywalker. 
* 
* 1) Obtener los ids de las peliculas leyendo el json del archivo people.json buscando por id=1 
* 2) Obtener las peliculas del archivo people.json
* 3) Escribir el resultado en un nuevo archivo (ej1.json) con el siguiente formato:
*    ["pelicula1", "pelicula2", ...]
*/

const fs = require('fs');

const readJSON = function(file, callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return callback(err);
    try {
      return callback(null, JSON.parse(data))
    }
    catch(err) {
      return callback(err)
    }
  })  
}

const writeJSON = function(file, data, callback) {
  var json = JSON.stringify(data);
  fs.writeFile(file, json, (err) => {
    if (err) return callback(err);
    callback(null, json)  
  })
}

const getPeople = function(param, callback) {
  return readJSON('../data/people.json', (err, people) => {
    if (err) return callback(err);
    if (typeof param.filter === 'function') people = people.filter(param.filter);
    if (typeof param.find === 'function') {
      const item = people.find(param.find);
      if (!item) return callback('not found');
      return callback(null, item); 
    }
    return callback(null, people)
  })
}

const getFilms = function(param, callback) {
  return readJSON('../data/films.json', callback);
}

const getFilmsByActorName = function(name, callback) {
  return getFilms(null, (err, films) => {
    if (err) return callback(err);
    return getPeople({
      find: item => item.name === name
    }, (err, person) => {
      if (err) return callback(err);
      return callback(null, films.filter(film => person.films.includes(film.id)))
    })
  })
}
	
getFilmsByActorName('Luke Skywalker', (err, films) => {
  writeJSON('ej1.json', films.map(film => film.title), (err) => {
    if (err) return console.error(err);
    console.log('ej1.json', 'written')
  })
})