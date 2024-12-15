import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Remedio = sequelize.define('Remedio', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Droga_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Droga',
      key: 'Id'
    }
  },
  Medida:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Tipo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Tipo',
      key: 'Id',

    }
  },
  FechaVencimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Codigo: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  tableName: 'Remedio',
  timestamps: false
})


export default Remedio
