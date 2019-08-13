const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyparse = require('body-parser');
const cors = require('cors');
require('dotenv/config');


mongoose.connect(process.env.DB_STRING,{
    useNewUrlParser: true
});

const app = express();
app.use(cors()); ///qdo uso cors() vazio, estou liberando para todo mundo
app.use(bodyparse.json())
app.use(routes);


app.listen(3000, function(){
    console.log('Servidor ativo porta 3000///');
})