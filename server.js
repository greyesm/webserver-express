const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//hace publico un directorio, en este caso "public"
app.use(express.static(__dirname + '/public'));
//express hbs engiene, para rederizar automatico paginas web
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'tavo reyes'

    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

/* app.get('/', function(req, res) {
    //res.send('Hello World');
    let salida = {
        nombre: 'yo',
        edad: 43,
        url: req.url
    };

    res.send(salida);
}); */

/* app.get('/data', (req, res) => {
    res.send('hola data');
}) */

app.listen(port, () => {
    console.log(`eschuchando port ${ port } `);
});