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

const getFilms = function(param) {
  return readJSON('../data/films.json');
}

const getPlanets = function(param) {
  return readJSON('../data/planets.json');
}

const getPlanetsByFilm = function(name) {
  return Promise.all([
    getFilms(null),
    getPlanets(null)
  ])
  .then(([films, planets]) => {
    var film = films.find(film => film.title === name);
    if (!film) throw new Error('film not found');
    return film.planets.map(id => planets.find(planet => planet.id === id))
  })
}

getPlanetsByFilm('Attack of the Clones')
.then(planets => writeJSON('ej5.json', planets.map(planet => planet ? planet.name : undefined)))
.then(() => console.log('ej5.json', 'written'))
.catch(err => console.error(err))