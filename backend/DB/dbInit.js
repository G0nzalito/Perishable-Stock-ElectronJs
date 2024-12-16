import sequelize from './db.js'
import Droga from './Entities/Droga.js'
import Tipo from './Entities/Tipo.js'
import Remedio from './Entities/Remedio.js'
import RemedioXDroga from './Entities/RemedioXDroga.js'

async function dbInit() {
  try {
    await sequelize.authenticate()

    // Espacio para sincronizar las entidades
    // Remedio.sync({ force: true })
    // Droga.sync({ force: true })
    // Tipo.sync({ force: true })
    // RemedioXDroga.sync({ force: true })

    Droga.belongsToMany(Remedio, { through: {model: RemedioXDroga}, foreignKey: 'idDroga', as: 'Remedio' })
    Remedio.belongsToMany(Droga, { through: RemedioXDroga, foreignKey: 'idRemedio', as: 'Droga' })
    Remedio.hasOne(Tipo, { foreignKey: 'idTipo', sourceKey: 'Tipo_id' })


    sequelize.sync()

    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default dbInit