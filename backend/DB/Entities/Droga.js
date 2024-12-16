import { DataTypes } from "sequelize"
import sequelize from "../db.js"

const Droga = sequelize.define(
  "Droga",
  {
    idDroga: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Medida: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "Droga",
    timestamps: false,
  }
)

export default Droga
