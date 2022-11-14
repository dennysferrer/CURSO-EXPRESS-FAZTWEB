/* const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html');
    read.pipe(res);
});

server.listen('3000', () => {
    console.log('Server listen in port 3000');
});
 */

const express = require("express");
const morgan = require('morgan');

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Middleware de ruta

app.use(morgan('dev'));

/* app.use((req, res, next) => {
  console.log('paso por aqui');
  console.log(`Route: ${req.url} Method: ${req.method}`);
  next();
});
 */

// Rutas iniciales sin autenticacion

app.all('/profile', (req, res) => {
  res.send('Profile Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// Middleware de autenticacion

app.use((req, res, next) => {
  if (req.query.login === 'dennys.ferrer@gmail.com'){
    next()
  } else {
    res.send('No autorizado ...');
  }
})

/* app.get('/products', (req, res) => {
    res.send('Lista de productos');
});

app.post('/products', (req, res) => {
    res.send('Creando productos');
});

app.put('/products', (req, res) => {
    res.send('Actualizando un producto');
});

app.delete('/products', (req, res) => {
    res.send('Eliminando un producto');
});

app.patch('/products', (req, res) => {
    res.send('Actualizando una parte del producto');
}); */

/* app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./texto.txt", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Dennys",
    lastname: "Ferrer",
    age: 34,
    points: [1, 2, 3, 4, 5],
    adress: {
      city: "CUCUTA",
      street: "Calle 10BN # 11AE62 Guaimaral",
    },
  });
});

app.get("/isAlive", (req, res) => {
    res.sendStatus(204);
}); */

/* app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('Nuevo usuario creado ...');
})

app.get('/hello/:user', (req, res) => {
  console.log(req.params.user);
  res.send(`Hello ${req.params.user}`);
  console.log(req.query);
});

app.get('/add/:x/:y', (req, res) => {
  console.log(req.params.x);
  console.log(req.params.y);
  res.send(`Suma es: ${parseInt(req.params.x) + parseInt(req.params.y)}`)
});

app.get('/users/:username/photo', (req, res) => {
  if (req.params.username === 'fazt'){
    res.sendFile('/javascript-logo.png', {
      root: __dirname
    });
  } else {
    res.send('El usuario no tiene accesso ...');
  }
})

app.get('/search', (req, res) => {
  if (req.query.q == "javascript books"){
    res.send("Lista de libros de javascript")
  } else {
    res.send("pagina normal")
  }
});

app.all('/info', (req, res) => {
  res.send('Server info');
}) */


// Rutas con autenticacion en los middlewares

app.get('/dashboard', (req, res) => {
  res.send('Dashboard Page');
});


// Arranque del servidor

app.listen(3000, () => {
  console.log("server listen in port 3000");
});
