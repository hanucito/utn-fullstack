/*
* En un archivo ej5.json, guardar todas los nombres de los planetas que aparecen en la pelicula "Attack of the Clones"
* 
* 1) Obtener los ids de los planetas leyendo el json del archivo planets.json buscando por id=5
* 2) Obttener los planetas del archivo planets.json
* 3) Escribir el resultado en un nuevo archivo (ej5.json) con el siguiente formato:
* 
* ["planeta1", "planeta2", ...]
*
*  CPS
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

const getFilms = function(param, callback) {
  return readJSON('../data/films.json', callback);
}

const getPlanets = function(param, callback) {
  return readJSON('../data/planets.json', callback);  
}

const getPlanetsByFilm = function(name, callback) {
  getFilms(null, (err, films) => {
    if (err) return callback(err);
    getPlanets(null, (err, planets) => {
      if (err) return callback(err);
      var film = films.find(film => film.title === name);
      if (!film) return callback('film not found');
      var planets = film.planets.map(id => planets.find(planet => planet.id === id))
      callback(null, planets)
    })

  })
}

getPlanetsByFilm('Attack of the Clones', (err, planets) => {
  writeJSON('ej5.json', planets.map(planet => planet ? planet.name : undefined), (err) => {
    if (err) return console.error(err);
    console.log('ej5.json', 'written')
  })
})
