const express = require('express');

const router = express.Router();
//GET: req.query
//POST: req.bory
//PARAMETROS: req.params

//SEND: enviar texto
//JSON: eviar objeto json

router.get('/', (req, res)=>{
    let obj = {
        nome:req.query.nome,
        idade: req.query.idade,
        mostrar:true,
        ingredientes:[
            {nome: 'Arroz', qt:'20g'},
            {nome: 'Macarrao', qt:'100g'}
        ] 
    };

    res.render('home',obj);
});



module.exports = router;