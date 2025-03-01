const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, bem-vindo à minha API!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na URL http://localhost:3000');
});