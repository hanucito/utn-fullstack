/*
* Refactor ej1.
*
*1) Crear una funcione (readJSON) para leer y parsear los archivos JSON.
*2) Crear una función (writeJSON) para convenrtir objeto a JSON y grabarlo en un archivo.
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
