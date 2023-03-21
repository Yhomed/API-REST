module.exports = (sequelize, dataTypes) => {

    let alias = "Artist"

    let cols = {
        id: {
            autoincremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: dataTypes.STRING
        },
        apellido: {
            allowNull: false,
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'artistas',
        timestamps: false,
        underscored: true
    }

    const Artist = sequelize.define(alias, cols, config);

    Artist.associate = function(models) {
        Artist.hasMany(models.Song, {
            as: 'artistas',
            foreignKey: 'artista_id',
        })
    }
    
    return Artist;

}