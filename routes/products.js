const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Contenedor = require('../contenedor');
const contenedor = new Contenedor();

router.get('/',(req,res) => {
    let result = contenedor.findAll()
    res.render('get-products', {
        products: result
    })
})

router.post('/',(req,res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error:'data is required'})
    contenedor.create(req.body)
    res.redirect('/')
})

module.exports = router