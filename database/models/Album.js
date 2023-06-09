module.exports = (sequelize, dataTypes) =>{
    let alias = "Album"
    let colum ={
        id: {
            autoincremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: dataTypes.STRING
        },
        duracion: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'album',
        timestamps: false,
        underscored: true
    }

    const Album = sequelize.define(alias, colum, config);

    Album.associate = function(models) {
        Album.hasMany(models.Song, { 
            as: 'album',
            foreignKey: 'album_id',
        })
    }
    
    return Album;

}