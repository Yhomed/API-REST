const express = require('express');
const db = require('../../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const generoAPIController = {
    list: (req, res) => {
        console.log('Listado de los generos con sus respectivas propiedades');
        db.Genero.findAll(
            {
                include: [
                    { association: 'canciones' },  
                ]
            }
        ).then(generos => {
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: generos.length, 
                    url: '/generos' 
                },
                
                data: generos 
            });
        })
        .catch(error => { console.log('Error: ' + error)})
    },
}

module.exports = generoAPIController;