const express = require('express');

const router = express.Router();
//GET: req.query
//POST: req.bory
//PARAMETROS: req.params

//SEND: enviar texto
//JSON: eviar objeto json

router.get('/', (req, res)=>{
    // let nome = req.query.nome;
    // let sobrenome = req.query.sobrenome;

    // res.json({nomeCompleto: nome+' '+sobrenome});

    res.json(req.query);
});

router.get('/posts/:id/:slug', (req, res)=>{
    let id = req.params.id;
    let slug = req.params.slug;
    let nome = req.params.nome;
    let sobrenome = req.params.sobrenome;

   
    res.send('ID: '+ id +' slug: '+slug);
});

router.get('/sobre', (req, res)=>{
    res.send('SOBRE');
});

module.exports = router;