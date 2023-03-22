module.exports = (sequelize, dataTypes) =>{
    let alias = "genres"
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

    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models) {
        Genre.hasMany(models.Song, {
            as: 'generos',
            foreignKey: 'genero_id',
        })
    }

    return Genres;

}