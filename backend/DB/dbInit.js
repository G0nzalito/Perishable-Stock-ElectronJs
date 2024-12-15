import sequelize from './db.js'
import Droga from './Entities/Droga.js'
import Tipo from './Entities/Tipo.js'
import Remedio from './Entities/Remedio.js'

async function dbInit() {
  try{
    await sequelize.authenticate()

    // Espacio para sincronizar las entidades
    Droga.sync()
    Tipo.sync()
    
    Remedio.hasOne(Droga, {foreignKey: 'Id'})
    Remedio.hasOne(Tipo, {foreignKey: 'Id'})
    
    Remedio.sync({force: true})

    sequelize.sync()

    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default dbInit