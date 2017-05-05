# Express

[Express](https://expressjs.com/) es un framework de aplicaciones web Node.js mínimo y flexible que proporciona un conjunto robusto de características para aplicaciones web y móviles.

## APIs

Debido a que posee varias utilidades, métodos y middlewares Express nos facilita la creación de APIs.

### Instalación

```javascript
cd myapp
npm init
npm install express --save
```

### Crear un servidor con Express

```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000,  () => console.log('Example app listening on port 3000!'));
```

### Rutas básicas

Enrutamiento se refiere a determinar cómo una aplicación responde a una solicitud de un cliente a un endpoint (URI) determinado, esto es una ruta y un método de solicitud HTTP específico (GET, POST, etc.).

Cada ruta puede tener uno o más handlers, que se ejecutan cuando la ruta se corresponde.

La definición de ruta adopta la siguiente estructura:

```javascript
App.METHOD (PATH, HANDLER)
```

Dónde:

* __App__ es una instancia de express.
* __METHOD__ es un método de solicitud HTTP, en minúsculas.
* __PATH__ es una ruta de acceso en el servidor.
* __HANDLER__ es la función ejecutada cuando se compara la ruta.

Ejemplo: 
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req, res) => res.send('Got a POST request'));

app.put('/', (req, res) => res.send('Got a PUT request'));

app.patch('/user', (req, res) => res.send('Got a PUT request at /user'));

app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'));

app.listen(3000,  () => console.log('Example app listening on port 3000!'));
```