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

const express = require('express');

const app = express();

app.get('/products', (req, res) => {
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
});


app.listen(3000, () => {
    console.log('server listen in port 3000');
})