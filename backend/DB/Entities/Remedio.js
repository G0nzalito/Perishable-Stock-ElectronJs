import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Remedio = sequelize.define('Remedio', {
  idRemedio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Tipo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Tipo',
      key: 'idTipo',

    }
  },
  FechaVencimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Contenido: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Codigo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

}, {
  tableName: 'Remedio',
  timestamps: false
})




export default Remedio
