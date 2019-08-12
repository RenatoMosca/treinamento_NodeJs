const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyparse = require('body-parser');

mongoose.connect('mongodb+srv://mongoRenato:Mosca-2019@cluster0-tuj14.mongodb.net/dbmongorenato?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const app = express();
app.use(bodyparse.json())
app.use(routes);


app.listen(3000, function(){
    console.log('Servidor ativo porta 3000//');
})