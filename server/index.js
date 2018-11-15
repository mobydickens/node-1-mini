const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const bc = require('./controllers/books_controller');
const app = express();

app.use(bodyParser.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);
app.listen(port, () => {
    console.log(`The server at port ${port} is running`);
})