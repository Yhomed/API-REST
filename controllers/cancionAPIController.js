const express = require('express');
const db = require('../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const cancionAPIController = {

    list: (req, res) => {
        console.log('Listado de canciones y propiedades');
        db.Song.findAll(
            {
                include: [
                    { association: 'albumes' },   
                    { association: 'generos' },  
                    { association: 'artistas' },
                ]
            }
        ).then(canciones => {
            return res.status(200).json({
                
                meta: {
                    
                    status: 200,
                    total: canciones.length, 
                    url: '/canciones'
                },
                
                data: canciones 
            });
        })
        .catch(error => { console.log('Error: ' + error)})
    },
    create: (req, res) => {
        console.log('Creación de un registro en la tabla canciones');
        console.log(req.body.titulo)
        db.Song.create(
            {
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                genero_id: req.body.genero_id,
                album_id: req.body.album_id,
                artista_id: req.body.artista_id
                
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones'
                    },
                    data:confirm
                }
            }else{
                respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones'
                    },
                    data:confirm
                }
            }
            return res.status(200).json(respuesta);
        })    
        .catch(error => {console.log('Error: ' + error)})
    },
    show: (req, res) => {
        console.log('Detalle de una cancion ');
        db.Song.findByPk(req.params.id)
        .then(cancion => {
            return res.status(200).json({
                data: cancion,
                status: 200,
                url: '/canciones/'+cancion.id
            });
        })
        .catch(error => { console.log('Error: ' + error)})
    },
    update: (req,res) => {
        console.log('Edició de registros');
        let cancionId = req.params.id;
        db.Song.update( 
            { 
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt,
                generoId: req.body.generoId,
                albumId: req.body.albumId,
                artistaId: req.body.artistaId
            }, 
            {
                where: {id: cancionId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204, 
                        total: confirm.length,
                        url: '/canciones/:id'
                    },
                    data:confirm
                }
            }
            return res.json(respuesta);
        })    
        .catch(error => { console.log('Error: '+ error)})
    },

    destroy: (req,res) => {
        console.log('Destrucción de un registro de la tabla canciones');
        let cancionId = req.params.id;
        db.Song.destroy({where: {id: cancionId}, force: true}) 
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta = {
                   
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204, 
                        total: confirm.length,
                        url: '/canciones/:id'
                    },
                    data:confirm
                }
            }
            return res.json(respuesta);
        })    
        .catch(error => {console.log("Error: "+ error)})
    }

}

module.exports = cancionAPIController;