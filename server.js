const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// инициализация рабочей директории
let initial_path = path.join(__dirname, "public");
app.use(express.static(initial_path));

app.get('/', (req, res) => {
    //res.send({ message: 'Hello WWW!' });
    res.sendFile(path.join(initial_path, "welcome.html"));
});

app.get('/home', (req, res) => {
    //res.send({ message: 'Hello WWW!' });
    res.sendFile(path.join(initial_path, "home.html"));
});

app.listen(port, hostname, () => {
    console.log('Application listening on port 3000!');
});