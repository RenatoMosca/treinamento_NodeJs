const express = require('express');
const routes = new express.Router();
const uploadsConfig = require('./config/Uploads');
const multer = require('multer');

const postController = require('./controllers/postController')

routes.get('/dev', (req, res)=>{    
    res.send(`Sabadão - na rota ${req.query.nome}`);
})

routes.post('/dev2', (req, res)=>{    
    res.send(`Sabadão - ${req.body.nome}`);
})

routes.get('/json',(req, res)=>{
    return res.json({
        nome: "Renatão",
        php: "na veia!"
    })
})

const uploads = multer(uploadsConfig)

//rotas posts
routes.get('/posts', postController.index);
routes.post('/posts', uploads.single('imagem'), postController.store);
routes.put('/posts', postController.update);
routes.delete('/posts', postController.delete);

module.exports = routes;