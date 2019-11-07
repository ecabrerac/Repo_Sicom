
'use strict'
var express = require('express');
var router = express.Router();
var Targets = require('../models/targets')

router.get('/', async function(req, res, next) {
    console.log("GET obtenido")
    let targets
    try{
        targets = await Targets.find()
        console.log(targets)
    }
    catch(err){
        console.log(err)
        res.status(500).send('error de conexion')
    }
   
     // Codigo de error y resultado del recurso
     res.status(200).send(targets)

   
  });

  router.delete('/', function(req, res, next) {
    

    Targets.remove().then(response => {
        console.log("Delete Enviado")

        console.log(response)
        res.status(200).send(response)
    },err => {
        console.log(err)
        res.status(500).send('error de conexion')
    })

  });

  router.post('/', function(req, res, next) {
    let body= req.body

    if(!Array.isArray(body)){

        
    Targets.post(body).then(response => {
            console.log("body: ", response)
            res.status(200).send(response)
        },err => { 
            console.log(err)
            res.status(500).send('error de conexion')
        })

    return res.status(400).send("no es array")

    }
    console.log("Post Enviado")

    //Promesas//
    Targets.collection.insertMany(body).then(response => {
        console.log("body: ", response)
        res.status(200).send(response)
    },err => { 
        console.log(err)
        res.status(500).send('error de conexion')
    })

  });

  
  
  module.exports = router;
  