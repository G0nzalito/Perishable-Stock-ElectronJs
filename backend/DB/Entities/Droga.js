import { DataTypes } from "sequelize"
import sequelize from "../db.js"

const Droga = sequelize.define(
  "Droga",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "Droga",
    timestamps: false,
  }
)

export default Droga
