module.exports = (sequelize, dataTypes) =>{
    let alias = "Genre"
    let colum ={
        id: {
            autoincremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        }
    };
    
    let config = {
        tableName: 'generos',
        timestamps: false,
        underscored: true
    }

    const Genre = sequelize.define(alias, colum, config);

    Genre.associate = function(models) {
        Genre.hasMany(models.Song, {
            as: 'canciones',
            foreignKey: 'genero_id',
        })
    }
    

    return Genre;

}