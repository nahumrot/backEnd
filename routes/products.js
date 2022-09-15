const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Contenedor = require('../contenedor');
const contenedor = new Contenedor();

router.get('/',(req,res) => {
    let result = contenedor.findAll()
    res.send (result)
})

router.get('/:id', (req,res) => {
    let result = contenedor.findByid(req.params.id)
    if (!result) return res.send ({error:'product was not found'})
    res.send(result)
})

router.post('/',(req,res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error:'data is required'})
    let result = contenedor.create(req.body)
    res.send(result)
})

router.put('/:id', (req,res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error:'data is required'})
    let result = contenedor.update (req,params.id, req.body)
    if (!result) return res.send({error:'prodcuct was not found'})
    res.send(result)
})

router.delete('/:id', (req,res) => {
    let result = contenedor.delete(req.params.id)
    res.send(result)
})

module.exports = router