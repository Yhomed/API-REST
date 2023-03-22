
module.exports = (sequelize, dataTypes) =>{
    let alias = "Song"
    let colum ={
        id: {
        autoincremental: true,
        primaryKey: true,
        type: dataTypes.INTEGER(11).UNSIGNED
    },
    titulo: {
        allowNull: false,
        type: dataTypes.STRING
    },
    duracion: {
        allowNull: false,
        type: dataTypes.STRING
    },
    genero_id : {
        allowNull: false,
        type: dataTypes.INTEGER
    },
    album_id : {
        allowNull: false,
        type: dataTypes.INTEGER
    },
    artista_id: {
        allowNull: false,
        type: dataTypes.INTEGER
    }}
    let config = {
        tableName: 'canciones',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const Song = sequelize.define(alias,colum,config)

    Song.associate = function(models) {
        Song.hasOne(models.Album, {
            as: 'albumes',
            foreignKey: 'album_id',
        })
       
        
    }
    return Song 
}