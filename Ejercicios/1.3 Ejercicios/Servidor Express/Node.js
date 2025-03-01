import express from 'express';
import path from 'path';

const app = express();
const port = 5000;
const __dirname = path.resolve();

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Definir rutas para servir los archivos HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html'); 
    //res.sendStatus(200);
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html'); 
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html'); 
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
