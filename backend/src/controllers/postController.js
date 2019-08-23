const post = require('../models/post');

module.exports = {
    async index(req, res){
        const posts = await post.find();
        console.log(posts);
        return res.json(posts);
    },

    async store(req, res){
        const {autor, likes, descricao} = req.body;
        const imagem = "http://localhost:3030/files/" + req.file.originalname;
        const posts = await post.create({
            autor,
            imagem, 
            likes, 
            descricao
        });
        return res.json(posts);
    },

    async update(req, res){
        const {id, autor, imagem, likes, descricao} = req.body;
        const posts = await post.findByIdAndUpdate(id, {
            $set: {
                autor,
                imagem,
                likes,
                descricao
            }
        });
        return res.json(posts);
    },

    async delete(req, res){
        const posts = await post.findByIdAndDelete(req.body.id);
        return res.json({delete:true});
    }

}