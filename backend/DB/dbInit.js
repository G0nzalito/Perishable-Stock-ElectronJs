import sequelize from './db.js'

async function dbInit() {
  try{
    await sequelize.authenticate()

    // Espacio para sincronizar las entidades

    sequelize.sync()

    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default dbInit